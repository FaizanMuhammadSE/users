export const MAPBOX_TOKEN = import.meta.env.VITE_MAP_BOX_TOKEN as string;
export const PAGE_SIZE = 5;
export const TABLE_HEADER_BG_COLOR = '#E0E0E0';
export const SERVER_ERR =
  'Something went wrong. Please refresh page or wait till server start responding';
export const NATIONALITIES: { [x: string]: string } = {
  AU: 'Australia',
  BR: 'Brazil',
  CA: 'Canada',
  CH: 'Switzerland',
  DE: 'Germany',
  DK: 'Denmark',
  ES: 'Spain',
  FI: 'Finland',
  FR: 'France',
  GB: 'United Kingdom',
  IE: 'Ireland',
  IN: 'India',
  IR: 'Iran',
  MX: 'Mexico',
  NL: 'Netherlands',
  NO: 'Norway',
  NZ: 'New Zealand',
  RS: 'Serbia',
  TR: 'Turkey',
  UA: 'Ukraine',
  US: 'United States',
};
export const GENDER_DROPDOWN_LIST = [
  { label: 'All', value: 'all' },
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];
export const NATIONALITIES_DROPDOWN_LIST = [
  { label: 'All', value: 'all' },
  // Make each entry of Nationalities array a dropdown item
  ...Object.entries(NATIONALITIES).map(([key, val]) => ({
    label: val,
    value: key,
  })),
];
export const inOriginalType = <T>(original: T, updated: string): T => {
  if (typeof original === 'number') return parseFloat(updated) as T;
  else if (typeof original === 'boolean') return (updated === 'true') as T;
  return updated as T;
};
