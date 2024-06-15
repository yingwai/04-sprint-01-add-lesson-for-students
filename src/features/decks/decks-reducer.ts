import { DeckType } from "./decks-api";

const initialState = {
  items: [] as DeckType[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case "SET-DECKS":
      return { ...state, items: action.decks }
    case "ADD-DECKS":
      return { ...state, items: [action.data, ...state.items] };
    default:
      return state
  }
}

type DecksActions =
  ReturnType<typeof setDecksAC>
  | ReturnType<typeof addDeckAC>;

export const setDecksAC = (decks: DeckType[]) => {
  return { type: 'SET-DECKS', decks } as const
}

export const addDeckAC = (data: DeckType) => {
  return { type: 'ADD-DECKS', data } as const
}