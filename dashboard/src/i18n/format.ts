import { i18n } from "./index";
import { DEFAULT_LOCALE, isLocale } from "./locales";

// English keeps the conventions the dashboard already shipped (24-hour clock,
// en-US number grouping) so its rendering does not change; every other locale
// uses its own.
const TIME_LOCALE_OVERRIDES: Record<string, string> = { en: "en-GB" };
const NUMBER_LOCALE_OVERRIDES: Record<string, string> = { en: "en-US" };

export function activeLocale(): string {
  const resolved = i18n.resolvedLanguage ?? i18n.language;
  return resolved && isLocale(resolved) ? resolved : DEFAULT_LOCALE;
}

export function timeLocale(): string {
  const locale = activeLocale();
  return TIME_LOCALE_OVERRIDES[locale] ?? locale;
}

export function numberLocale(): string {
  const locale = activeLocale();
  return NUMBER_LOCALE_OVERRIDES[locale] ?? locale;
}

export function formatTime(
  value: number | string | Date,
  options?: Intl.DateTimeFormatOptions,
): string {
  return new Date(value).toLocaleTimeString(timeLocale(), options);
}

// For callers that previously passed no locale at all, which meant "whatever the
// browser is set to".
export function formatClock(
  value: number | string | Date,
  options?: Intl.DateTimeFormatOptions,
): string {
  return new Date(value).toLocaleTimeString(activeLocale(), options);
}

export function formatDateTime(
  value: number | string | Date,
  options?: Intl.DateTimeFormatOptions,
): string {
  return new Date(value).toLocaleString(timeLocale(), options);
}

export function formatNumber(
  value: number,
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(numberLocale(), options).format(value);
}
