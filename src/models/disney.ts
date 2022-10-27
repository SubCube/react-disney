export interface DisneyCharacter {
  films: Array<string>
  shortFilms: Array<string>
  tvShows: Array<string>
  videoGames: Array<string>
  parkAttractions: Array<string>
  allies: Array<unknown>
  enemies: Array<unknown>
  _id: number
  name: string
  imageUrl: string
  url: string
}

export interface CharactersListResponse {
  data: Array<DisneyCharacter>
  count: number
  totalPages: number
  nextPage: string
}
