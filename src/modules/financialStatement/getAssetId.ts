export function getAssetId(identifier: string): string {
  return identifier.replaceAll(" ", "").toLowerCase();
}
