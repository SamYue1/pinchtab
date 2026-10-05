import type {
  BackendConfig,
  BackendConfigState,
  BackendIDPIConfig,
  BackendSecurityConfig,
} from "../../types";

export type SectionId =
  | "dashboard"
  | "defaults"
  | "orchestration"
  | "security"
  | "security-idpi"
  | "profiles"
  | "network"
  | "browser"
  | "timeouts"
  | "autosolver"
  | "observability";

// labelKey and descriptionKey name entries in the locale files; the settings page
// resolves them with t().
export const sections: Array<{
  id: SectionId;
  labelKey: string;
  descriptionKey: string;
}> = [
  {
    id: "dashboard",
    labelKey: "settings.sections.dashboard.dashboard",
    descriptionKey:
      "settings.sections.dashboard.local_monitoring_and_screencast",
  },
  {
    id: "defaults",
    labelKey: "settings.sections.defaults.instance_defaults",
    descriptionKey:
      "settings.sections.defaults.how_new_managed_browser_instances_launch",
  },
  {
    id: "orchestration",
    labelKey: "settings.sections.orchestration.orchestration",
    descriptionKey:
      "settings.sections.orchestration.routing_strategy_port_range_and",
  },
  {
    id: "security",
    labelKey: "settings.sections.security.security",
    descriptionKey:
      "settings.sections.security.sensitive_endpoint_gates_and_access",
  },
  {
    id: "security-idpi",
    labelKey: "settings.sections.security-idpi.security_idpi",
    descriptionKey:
      "settings.sections.security-idpi.indirect_prompt_injection_website_and",
  },
  {
    id: "profiles",
    labelKey: "settings.sections.profiles.profiles",
    descriptionKey:
      "settings.sections.profiles.shared_profile_storage_and_default",
  },
  {
    id: "network",
    labelKey: "settings.sections.network.network_attach",
    descriptionKey:
      "settings.sections.network.server_binding_auth_and_attach_policy",
  },
  {
    id: "browser",
    labelKey: "settings.sections.browser.browser_runtime",
    descriptionKey: "settings.sections.browser.chrome_binary_version_flags_and",
  },
  {
    id: "timeouts",
    labelKey: "settings.sections.timeouts.timeouts",
    descriptionKey:
      "settings.sections.timeouts.action_navigation_shutdown_and_wait",
  },
  {
    id: "autosolver",
    labelKey: "settings.sections.autosolver.autosolver",
    descriptionKey:
      "settings.sections.autosolver.challenge_solving_behavior_and_config",
  },
  {
    id: "observability",
    labelKey: "settings.sections.observability.observability",
    descriptionKey:
      "settings.sections.observability.activity_logging_and_retention_settings",
  },
];

export const fieldClass =
  "w-full rounded-sm border border-border-subtle bg-[rgb(var(--brand-surface-code-rgb)/0.72)] px-3 py-2 text-sm text-text-primary placeholder:text-text-muted transition-all duration-150 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export type UpdateBackendSection = <K extends keyof BackendConfig>(
  section: K,
  patch: Partial<BackendConfig[K]>,
) => void;

export type SecurityEndpointKey = Exclude<
  keyof BackendSecurityConfig,
  "attach" | "idpi"
>;
export type IDPIToggleKey = Exclude<
  keyof BackendIDPIConfig,
  "allowedDomains" | "customPatterns"
>;

export const securityEndpointRows = [
  ["allowEvaluate", "settings.security.endpoints.allowEvaluate.allow_evaluate"],
  ["allowMacro", "settings.security.endpoints.allowMacro.allow_macro"],
  [
    "allowScreencast",
    "settings.security.endpoints.allowScreencast.allow_screencast",
  ],
  ["allowDownload", "settings.security.endpoints.allowDownload.allow_download"],
  ["allowCookies", "settings.security.endpoints.allowCookies.allow_cookies"],
  ["allowUpload", "settings.security.endpoints.allowUpload.allow_upload"],
  [
    "allowNetworkIntercept",
    "settings.security.endpoints.allowNetworkIntercept.allow_network_interception",
    "settings.security.endpoints.allowNetworkIntercept.lets_agents_install_rules_to_abort_or",
  ],
  [
    "allowFileScheme",
    "settings.security.endpoints.allowFileScheme.allow_file_navigation",
    "settings.security.endpoints.allowFileScheme.lets_agents_open_local_file_urls_a_file",
  ],
] as const satisfies ReadonlyArray<
  | readonly [SecurityEndpointKey, string]
  | readonly [SecurityEndpointKey, string, string]
>;

export const idpiToggleRows = [
  [
    "enabled",
    "settings.security.idpi.enabled.enable_idpi",
    "settings.security.idpi.enabled.turn_on_indirect_prompt_injection",
  ],
  [
    "strictMode",
    "settings.security.idpi.strictMode.strict_mode",
    "settings.security.idpi.strictMode.block_disallowed_domains_and_suspicious",
  ],
  [
    "scanContent",
    "settings.security.idpi.scanContent.scan_content",
    "settings.security.idpi.scanContent.inspect_extracted_text_and_snapshots",
  ],
  [
    "wrapContent",
    "settings.security.idpi.wrapContent.wrap_content",
    "settings.security.idpi.wrapContent.mark_returned_page_text_as_untrusted",
  ],
] as const satisfies ReadonlyArray<readonly [IDPIToggleKey, string, string]>;

export const instanceDefaultsBooleanRows = [
  ["blockImages", "settings.defaults.booleans.blockImages.block_images"],
  ["blockMedia", "settings.defaults.booleans.blockMedia.block_media"],
  ["blockAds", "settings.defaults.booleans.blockAds.block_ads"],
  [
    "noAnimations",
    "settings.defaults.booleans.noAnimations.disable_css_animations",
  ],
  ["noRestore", "settings.defaults.booleans.noRestore.skip_session_restore"],
] as const;

export const timeoutRows = [
  [
    "actionSec",
    "settings.defaults.timeouts.actionSec.action_timeout",
    "settings.defaults.timeouts.actionSec.maximum_time_for_action_requests",
  ],
  [
    "navigateSec",
    "settings.defaults.timeouts.navigateSec.navigate_timeout",
    "settings.defaults.timeouts.navigateSec.maximum_time_for_navigation_requests",
  ],
  [
    "shutdownSec",
    "settings.defaults.timeouts.shutdownSec.shutdown_timeout",
    "settings.defaults.timeouts.shutdownSec.grace_period_before_force_closing_a",
  ],
  [
    "waitNavMs",
    "settings.defaults.timeouts.waitNavMs.wait_after_navigation_delay",
    "settings.defaults.timeouts.waitNavMs.post_navigation_stabilization_delay_in",
  ],
] as const;

export function csvToList(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function listToCsv(value: string[]): string {
  return value.join(", ");
}

// Returns an i18n key. The notice is raised from a controller whose call site is
// where the current language is known, so the string is not resolved here.
export function backendSaveNotice(state: BackendConfigState | null): string {
  if (state?.restartRequired) {
    return "settings.notices.backend_config_saved_dynamic_changes_2";
  }
  return "settings.notices.backend_config_saved_dynamic_changes";
}
