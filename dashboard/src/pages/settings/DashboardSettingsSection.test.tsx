import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { initI18n, initializeI18n } from "../../i18n";
import { enMessages } from "../../i18n/messages";
import {
  LOCALE_LABELS,
  LOCALE_STORAGE_KEY,
  SUPPORTED_LOCALES,
  localeLoaders,
} from "../../i18n/locales";
import type { LocalDashboardSettings } from "../../types";
import { DashboardSettingsSection } from "./DashboardSettingsSection";

const settings: LocalDashboardSettings = {
  screencast: { fps: 10, quality: 60, maxWidth: 1280 },
  stealth: "light",
  browser: { blockImages: false, blockMedia: false, noAnimations: false },
  monitoring: { memoryMetrics: false, pollInterval: 30 },
  agents: { reasoningMode: "tool_calls" },
};

const languageLabel = (messages: typeof enMessages) =>
  messages.pages.settings.dashboardsettingssection.language;

const renderSection = () =>
  render(
    <DashboardSettingsSection
      localSettings={settings}
      setLocalSettings={vi.fn()}
    />,
  );

beforeEach(async () => {
  // The picker drives the shared i18n instance, so every case starts from
  // English, the way a dashboard with no stored choice does.
  localStorage.clear();
  document.documentElement.removeAttribute("lang");
  document.documentElement.removeAttribute("dir");
  await initializeI18n("en", { en: { translation: enMessages } });
});

describe("DashboardSettingsSection language picker", () => {
  it("offers every supported locale under its own name", () => {
    renderSection();

    const options = Array.from(
      screen
        .getByLabelText(languageLabel(enMessages))
        .querySelectorAll("option"),
    ).map((option) => option.textContent);

    expect(options).toEqual(
      SUPPORTED_LOCALES.map((locale) => LOCALE_LABELS[locale]),
    );
  });

  it("switches the interface, persists the choice and flips direction", async () => {
    const user = userEvent.setup();
    const arabic = (await localeLoaders.ar()).default;
    renderSection();

    await user.selectOptions(
      screen.getByLabelText(languageLabel(enMessages)),
      "ar",
    );

    // The row re-renders in the new language, so this is not merely stored.
    expect(await screen.findByText(languageLabel(arabic))).toBeInTheDocument();
    expect(localStorage.getItem(LOCALE_STORAGE_KEY)).toBe("ar");
    await waitFor(() => {
      expect(document.documentElement.dir).toBe("rtl");
    });
    expect(document.documentElement.lang).toBe("ar");
  });

  it("starts in the stored language instead of the browser default", async () => {
    const japanese = (await localeLoaders.ja()).default;
    localStorage.setItem(LOCALE_STORAGE_KEY, "ja");

    // A reload goes through initI18n, which is what reads the stored choice.
    await initI18n();
    renderSection();

    const select = screen.getByLabelText(
      languageLabel(japanese),
    ) as HTMLSelectElement;
    expect(select.value).toBe("ja");
    expect(document.documentElement.lang).toBe("ja");
    expect(document.documentElement.dir).toBe("ltr");
  });
});
