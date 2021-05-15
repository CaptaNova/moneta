export function getAssetId(identifier: string): string {
  return identifier
    .replaceAll(/\s/gi, "")
    .replaceAll(/[^\w-]/gi, "_")
    .toLowerCase();
}
