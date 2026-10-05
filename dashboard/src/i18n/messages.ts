import en from "../locales/en.json";

// English is the source of truth. Every other locale is annotated with this type,
// so a missing or an extra key fails "bun run typecheck" instead of falling back
// to English at runtime without anyone noticing.
export type Messages = typeof en;

export const enMessages: Messages = en;
