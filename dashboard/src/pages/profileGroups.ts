import type { Profile } from "../generated/types";

export type ProfileGroupKind = "user" | "temporary" | "quarantined";

// groupOrder puts the operator's own profiles first, so quarantine debris and ephemeral
// instance directories can never push them out of view — the rows someone made are at the
// top whether there are ten quarantined siblings or none.
// labelKey names a locale entry; ProfilesPage resolves it with t().
export const groupOrder: { kind: ProfileGroupKind; labelKey: string }[] = [
  { kind: "user", labelKey: "profiles.groups.user" },
  { kind: "temporary", labelKey: "profiles.groups.temporary" },
  { kind: "quarantined", labelKey: "profiles.groups.quarantined" },
];

// groupProfiles splits the listing on the FLAGS the API sends, never on the name. A profile
// a user called "my.quarantine-notes" is theirs; a directory quarantine renamed aside is
// not, and only the server can tell them apart.
export function groupProfiles(
  profiles: Profile[],
): Record<ProfileGroupKind, Profile[]> {
  const groups: Record<ProfileGroupKind, Profile[]> = {
    user: [],
    temporary: [],
    quarantined: [],
  };
  profiles.forEach((profile) => {
    if (profile.quarantined) {
      groups.quarantined.push(profile);
      return;
    }
    if (profile.temporary) {
      groups.temporary.push(profile);
      return;
    }
    groups.user.push(profile);
  });
  return groups;
}

// groupBytes sums diskUsage, the same field `pinchtab profiles` totals, so the two surfaces
// cannot report different sizes for one set of directories.
export function groupBytes(profiles: Profile[]): number {
  return profiles.reduce(
    (total, profile) => total + (profile.diskUsage ?? 0),
    0,
  );
}

// formatProfileBytes mirrors the CLI's own byte formatting: 1024 units, one decimal above a
// kilobyte, so the same directory reads the same way in both places.
export function formatProfileBytes(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  const units = ["KB", "MB", "GB", "TB", "PB"];
  let value = bytes / 1024;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  return `${value.toFixed(1)} ${units[unit]}`;
}
