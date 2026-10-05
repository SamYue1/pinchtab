import { describe, expect, it } from "vitest";
import {
  activeLocale,
  formatClock,
  formatDateTime,
  formatNumber,
  formatTime,
  numberLocale,
  timeLocale,
} from "./format";
import { initializeI18n } from "./index";
import { enMessages } from "./messages";
import { localeLoaders, type Locale } from "./locales";

async function switchTo(locale: Locale): Promise<void> {
  const resources: Parameters<typeof initializeI18n>[1] = {
    en: { translation: enMessages },
  };
  if (locale !== "en") {
    resources[locale] = {
      translation: (await localeLoaders[locale]()).default,
    };
  }
  await initializeI18n(locale, resources);
}

const instant = new Date("2026-03-04T15:04:05Z");
const amount = 1234567.891;

describe("locale-driven formatting", () => {
  it("keeps the conventions English already shipped", async () => {
    await switchTo("en");
    expect(activeLocale()).toBe("en");
    expect(timeLocale()).toBe("en-GB");
    expect(numberLocale()).toBe("en-US");
    expect(formatTime(instant, { hour: "2-digit", minute: "2-digit" })).toBe(
      instant.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    );
    expect(formatNumber(amount, { maximumFractionDigits: 2 })).toBe(
      new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
        amount,
      ),
    );
  });

  it("formats numbers the way each locale writes them", async () => {
    const rendered: Record<string, string> = {};
    for (const locale of ["en", "de", "fr"] as const) {
      await switchTo(locale);
      rendered[locale] = formatNumber(amount, { maximumFractionDigits: 2 });
    }
    expect(rendered.de).not.toBe(rendered.en);
    expect(rendered.fr).not.toBe(rendered.en);
    expect(rendered.de).toBe(
      new Intl.NumberFormat("de", { maximumFractionDigits: 2 }).format(amount),
    );
  });

  it("formats dates the way each locale writes them", async () => {
    const rendered: Record<string, string> = {};
    for (const locale of ["en", "de", "ru"] as const) {
      await switchTo(locale);
      rendered[locale] = formatDateTime(instant, {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
    }
    expect(rendered.de).not.toBe(rendered.en);
    expect(rendered.ru).not.toBe(rendered.en);
  });

  it("keeps the browser-default clock for callers that never pinned one", async () => {
    await switchTo("en");
    expect(formatClock(instant, { hour: "2-digit", minute: "2-digit" })).toBe(
      instant.toLocaleTimeString("en", { hour: "2-digit", minute: "2-digit" }),
    );
  });

  it("falls back to English when the locale is not a supported one", async () => {
    await initializeI18n("en", { en: { translation: enMessages } });
    expect(activeLocale()).toBe("en");
    expect(formatNumber(1000, { maximumFractionDigits: 0 })).toBe(
      new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(1000),
    );
  });
});
