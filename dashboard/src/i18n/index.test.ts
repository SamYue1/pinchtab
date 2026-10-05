import { beforeEach, describe, expect, it } from "vitest";
import {
  applyDocumentLocale,
  changeLocale,
  effectiveLocale,
  i18n,
  initializeI18n,
} from "./index";
import { enMessages } from "./messages";
import { LOCALE_STORAGE_KEY, localeLoaders } from "./locales";

const enOnly = { en: { translation: enMessages } };

beforeEach(async () => {
  localStorage.clear();
  document.documentElement.removeAttribute("dir");
  document.title = "";
  await initializeI18n("en", enOnly);
});

describe("initializeI18n", () => {
  it("renders the requested locale when its resources are present", async () => {
    const chinese = await localeLoaders["zh-CN"]();
    await initializeI18n("zh-CN", {
      "zh-CN": { translation: chinese.default },
    });
    expect(effectiveLocale()).toBe("zh-CN");
    expect(i18n.t("app.name")).toBe(enMessages.app.name);
  });

  it("falls back to English when the locale has no resources", async () => {
    await initializeI18n("ja", enOnly);
    expect(effectiveLocale()).toBe("en");
    expect(i18n.t("app.name")).toBe(enMessages.app.name);
  });
});

describe("applyDocumentLocale", () => {
  it("writes lang, dir and the document title", () => {
    applyDocumentLocale("zh-CN");
    expect(document.documentElement.lang).toBe("zh-CN");
    expect(document.documentElement.dir).toBe("ltr");
    expect(document.title).toBe(enMessages.app.name);
  });

  it("marks Arabic as right to left", () => {
    applyDocumentLocale("ar");
    expect(document.documentElement.dir).toBe("rtl");
  });
});

describe("changeLocale", () => {
  it("loads the locale, persists it and syncs the document", async () => {
    await changeLocale("de");
    expect(effectiveLocale()).toBe("de");
    expect(localStorage.getItem(LOCALE_STORAGE_KEY)).toBe("de");
    expect(document.documentElement.lang).toBe("de");
    expect(document.documentElement.dir).toBe("ltr");
    expect(i18n.t("app.name")).toBe(enMessages.app.name);
  });

  it("switches back to a locale whose bundle is already loaded", async () => {
    await changeLocale("ru");
    await changeLocale("en");
    expect(effectiveLocale()).toBe("en");
    expect(localStorage.getItem(LOCALE_STORAGE_KEY)).toBe("en");
  });
});
