export const RegionCodes: { [key in keyof SimpleHomeCategoryOrders]: number } = {
  anime: 1,
  bangumi: 13,
  china: 167,
  manga: -1,
  music: 3,
  dance: 129,
  game: 4,
  knowledge: 36,
  tech: 188,
  life: 160,
  food: 211,
  animal: 217,
  kichiku: 119,
  fashion: 155,
  // ads: 165,
  information: 202,
  entertainment: 5,
  column: -1,
  // movie: 23,
  movie: 181,
  tv: 11,
  film: 23,
  // film: 181,
  documentary: 177,
}
export const RegionLinks: { [key in keyof SimpleHomeCategoryOrders]: string } = {
  anime: 'v/douga',
  bangumi: 'anime',
  china: 'guochuang',
  manga: '',
  music: 'v/music',
  dance: 'v/dance',
  game: 'v/game',
  knowledge: 'v/knowledge',
  tech: 'v/tech',
  life: 'v/life',
  food: 'v/food',
  animal: 'v/animal',
  kichiku: 'v/kichiku',
  fashion: 'v/fashion',
  // ads: 'v/ad/ad',
  information: 'v/information/',
  entertainment: 'v/ent',
  column: '',
  movie: 'v/cinephile',
  tv: 'tv',
  film: 'cinema',
  documentary: 'documentary',
}
export default {
  export: {
    RegionCodes,
    RegionLinks,
  },
}