import { describe, expect, it } from "vitest";
import {
  DEFAULT_LOCALE,
  LOCALE_LABELS,
  LOCALE_STORAGE_KEY,
  SUPPORTED_LOCALES,
  detectLocale,
  isLocale,
  matchLocale,
} from "./locales";

describe("matchLocale", () => {
  it("matches supported tags case-insensitively", () => {
    expect(matchLocale("en")).toBe("en");
    expect(matchLocale("zh-cn")).toBe("zh-CN");
    expect(matchLocale("PT-br")).toBe("pt-BR");
    expect(matchLocale(" ja ")).toBe("ja");
  });

  it("uses the script or region subtag to pick the Chinese form", () => {
    expect(matchLocale("zh")).toBe("zh-CN");
    expect(matchLocale("zh-Hans")).toBe("zh-CN");
    expect(matchLocale("zh-Hans-CN")).toBe("zh-CN");
    expect(matchLocale("zh-Hant")).toBe("zh-TW");
    expect(matchLocale("zh-Hant-TW")).toBe("zh-TW");
    expect(matchLocale("zh-HK")).toBe("zh-TW");
  });

  it("falls back to the base language for regional variants", () => {
    expect(matchLocale("en-GB")).toBe("en");
    expect(matchLocale("de-AT")).toBe("de");
    expect(matchLocale("es-419")).toBe("es");
    expect(matchLocale("pt-PT")).toBe("pt-BR");
    expect(matchLocale("fr-CA")).toBe("fr");
  });

  it("returns null for an unrelated or empty tag", () => {
    expect(matchLocale("sv-SE")).toBeNull();
    expect(matchLocale("")).toBeNull();
    expect(matchLocale("   ")).toBeNull();
  });
});

describe("detectLocale", () => {
  it("prefers a stored choice over the browser", () => {
    expect(detectLocale("ko", ["ja-JP"])).toBe("ko");
  });

  it("ignores a stored value that is not a supported locale", () => {
    expect(detectLocale("sv-SE", ["ja-JP"])).toBe("ja");
  });

  it("takes the first browser language it can match", () => {
    expect(detectLocale(null, ["sv-SE", "zh-Hant", "en-US"])).toBe("zh-TW");
  });

  it("uses English when nothing matches", () => {
    expect(detectLocale(null, ["sv-SE", "fi"])).toBe(DEFAULT_LOCALE);
    expect(detectLocale(null, [])).toBe(DEFAULT_LOCALE);
  });
});

describe("locale metadata", () => {
  it("labels every supported locale and keeps its own storage key", () => {
    expect(SUPPORTED_LOCALES).toHaveLength(12);
    for (const locale of SUPPORTED_LOCALES) {
      expect(LOCALE_LABELS[locale]).toBeTruthy();
      expect(isLocale(locale)).toBe(true);
    }
    expect(LOCALE_STORAGE_KEY).toBe("pinchtab_locale");
  });
});
