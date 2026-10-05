import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { changeLocale } from "./index";
import {
  DEFAULT_LOCALE,
  LOCALE_LABELS,
  SUPPORTED_LOCALES,
  isLocale,
  type Locale,
} from "./locales";

export interface LocaleOption {
  value: Locale;
  label: string;
}

export const localeOptions: readonly LocaleOption[] = SUPPORTED_LOCALES.map(
  (value) => ({
    value,
    label: LOCALE_LABELS[value],
  }),
);

export function useLocale(): {
  locale: Locale;
  setLocale: (next: Locale) => void;
} {
  const { i18n } = useTranslation();
  const resolved = i18n.resolvedLanguage ?? i18n.language;
  const locale = isLocale(resolved ?? "")
    ? (resolved as Locale)
    : DEFAULT_LOCALE;

  const setLocale = useCallback((next: Locale) => {
    void changeLocale(next);
  }, []);

  return { locale, setLocale };
}
