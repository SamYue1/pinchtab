import { createInstance, type i18n as I18nInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import { enMessages, type Messages } from "./messages";
import {
  DEFAULT_LOCALE,
  RTL_LOCALES,
  detectBrowserLocale,
  isLocale,
  localeLoaders,
  persistLocale,
  type Locale,
} from "./locales";

export type LocaleResources = Partial<
  Record<Locale, { translation: Messages }>
>;

export const i18n: I18nInstance = createInstance();

export async function initializeI18n(
  locale: Locale,
  resources: LocaleResources,
): Promise<I18nInstance> {
  await i18n.use(initReactI18next).init({
    lng: locale,
    fallbackLng: DEFAULT_LOCALE,
    resources,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
  return i18n;
}

// The language actually rendering: a locale whose chunk failed to load resolves
// to the English fallback, and the document has to describe what is on screen.
export function effectiveLocale(): Locale {
  const candidate = i18n.resolvedLanguage ?? i18n.language;
  return candidate && isLocale(candidate) ? candidate : DEFAULT_LOCALE;
}

export function applyDocumentLocale(locale: Locale): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.lang = locale;
  root.dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
  document.title = i18n.t("app.name");
}

export async function loadLocaleResources(locale: Locale): Promise<Messages> {
  if (locale === DEFAULT_LOCALE) return enMessages;
  const loaded = await localeLoaders[locale]();
  i18n.addResourceBundle(locale, "translation", loaded.default, true, true);
  return loaded.default;
}

export async function changeLocale(locale: Locale): Promise<void> {
  await loadLocaleResources(locale);
  await i18n.changeLanguage(locale);
  persistLocale(locale);
  applyDocumentLocale(effectiveLocale());
}

export async function initI18n(): Promise<I18nInstance> {
  const requested = detectBrowserLocale();
  const resources: LocaleResources = {
    [DEFAULT_LOCALE]: { translation: enMessages },
  };
  if (requested !== DEFAULT_LOCALE) {
    try {
      resources[requested] = {
        translation: (await localeLoaders[requested]()).default,
      };
    } catch {
      // English is already in the bundle, so a locale chunk that fails to load
      // costs the operator their language but not the dashboard.
    }
  }
  await initializeI18n(requested, resources);
  applyDocumentLocale(effectiveLocale());
  return i18n;
}
