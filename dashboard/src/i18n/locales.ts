import type { Messages } from "./messages";

export const SUPPORTED_LOCALES = [
  "en",
  "zh-CN",
  "zh-TW",
  "ja",
  "ko",
  "es",
  "pt-BR",
  "fr",
  "de",
  "it",
  "ru",
  "ar",
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE = "en";
export const LOCALE_STORAGE_KEY = "pinchtab_locale";

// Every other locale in this list lays out left to right.
export const RTL_LOCALES: readonly Locale[] = ["ar"];

// Endonyms, so the language picker is readable to someone who cannot read the
// language the dashboard is currently showing.
// Endonyms stay untranslated: the picker has to be readable to someone who
// cannot read the language the dashboard is currently showing.
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  ja: "日本語",
  ko: "한국어",
  es: "Español",
  "pt-BR": "Português (Brasil)",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  ru: "Русский",
  ar: "العربية",
};

const LOCALE_BY_LOWERCASE = new Map<string, Locale>(
  SUPPORTED_LOCALES.map((locale) => [locale.toLowerCase(), locale]),
);

const LOCALE_BY_BASE_LANGUAGE: Record<string, Locale> = {
  en: "en",
  zh: "zh-CN",
  ja: "ja",
  ko: "ko",
  es: "es",
  pt: "pt-BR",
  fr: "fr",
  de: "de",
  it: "it",
  ru: "ru",
  ar: "ar",
};

// "zh" alone does not say which script the reader wants, and the two written
// forms are not interchangeable, so script and region subtags decide it.
function matchChinese(tag: string): Locale | null {
  if (/^(zh-hant|zh-tw|zh-hk|zh-mo)/.test(tag)) return "zh-TW";
  if (/^(zh-hans|zh-cn|zh-sg)/.test(tag)) return "zh-CN";
  return null;
}

export function isLocale(value: string): value is Locale {
  return LOCALE_BY_LOWERCASE.has(value.toLowerCase());
}

export function matchLocale(tag: string): Locale | null {
  const normalized = tag.trim().toLowerCase();
  if (normalized === "") return null;
  const exact = LOCALE_BY_LOWERCASE.get(normalized);
  if (exact) return exact;
  const chinese = matchChinese(normalized);
  if (chinese) return chinese;
  return LOCALE_BY_BASE_LANGUAGE[normalized.split("-")[0]] ?? null;
}

function readStoredLocale(): string | null {
  try {
    return localStorage.getItem(LOCALE_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function persistLocale(locale: Locale): void {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // A rejected write only costs the operator the choice on the next visit.
  }
}

export function browserLanguages(): readonly string[] {
  if (typeof navigator === "undefined") return [];
  const { languages, language } = navigator;
  if (languages && languages.length > 0) return languages;
  return language ? [language] : [];
}

export function detectLocale(
  stored: string | null = readStoredLocale(),
  languages: readonly string[] = browserLanguages(),
): Locale {
  if (stored !== null && isLocale(stored)) return stored;
  for (const tag of languages) {
    const match = matchLocale(tag);
    if (match) return match;
  }
  return DEFAULT_LOCALE;
}

export function detectBrowserLocale(): Locale {
  return detectLocale();
}

// One dynamic import per locale: Vite emits a separate chunk for each, so a
// browser downloads the language it renders and nothing more. English has no
// entry because it ships in the entry chunk as the fallback.
export const localeLoaders: Record<
  Exclude<Locale, typeof DEFAULT_LOCALE>,
  () => Promise<{ default: Messages }>
> = {
  "zh-CN": () => import("../locales/zh-CN"),
  "zh-TW": () => import("../locales/zh-TW"),
  ja: () => import("../locales/ja"),
  ko: () => import("../locales/ko"),
  es: () => import("../locales/es"),
  "pt-BR": () => import("../locales/pt-BR"),
  fr: () => import("../locales/fr"),
  de: () => import("../locales/de"),
  it: () => import("../locales/it"),
  ru: () => import("../locales/ru"),
  ar: () => import("../locales/ar"),
};
