import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export type ResponseDecksType = {
  items: DeckType[]
  pagination: PaginationType
}

export type DeckType = {
  isFavorite: boolean
  author: AuthorType
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

export type AuthorType = {
  id: string
  name: string
}

export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export const decksApi = {
  getDecks() {
    return instance.get<ResponseDecksType>('/v2/decks')
  },
  addDecks(data: { name: string }) {
    return instance.post<DeckType>('/v1/decks', data)
  }
}