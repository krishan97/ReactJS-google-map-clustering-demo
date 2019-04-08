export * from './mapStyle';
export const GOOGLE_API_KEY = '';
export const GOOGLE_API_VERSION = 3.36;
export const GOOGLE_MAP_CENTER = { lat: 30.7046 ,lng: 76.7179 };
export const GOOGLE_DEFAULT_ZOOM = 2;
const TOTAL_COUNT = 300;
export const GOOGLE_DUMMY_DATA = [...Array(TOTAL_COUNT)].fill(0)
  .map((__, index) => ({
    id: index,
    coordinates:[
      GOOGLE_MAP_CENTER.lng +
      0.01 * index *
      Math.cos(70 + 23 * Math.PI * index / 180) *
      Math.cos(50 * Math.PI * index / 180) + Math.sin(5 * index / 180),
      GOOGLE_MAP_CENTER.lat +
      0.01 * index *
      Math.sin(30 * Math.PI * index / 180) *
      Math.cos(50 * Math.PI * index / 180) + Math.sin(5 * index / 180)
    ]
  }));
