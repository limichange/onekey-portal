export function getLocalizationId(item: {
  attributes: { localizations: { data: { id: number | boolean }[] } };
}): boolean | number | undefined {
  return item.attributes?.localizations?.data?.[0]?.id;
}
