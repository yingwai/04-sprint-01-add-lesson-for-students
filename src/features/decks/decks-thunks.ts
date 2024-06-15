import { Dispatch } from "redux";
import { decksApi } from "./decks-api";
import { addDeckAC, setDecksAC } from "./decks-reducer";

export const getDecksTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await decksApi.getDecks();
        dispatch(setDecksAC(res.data.items));
    } catch {
        throw new Error("get err");
    }
}
export const addDecksTC = (data: { name: string }) => async (dispatch: Dispatch) => {
    try {
        const res = await decksApi.addDecks(data);
        dispatch(addDeckAC(res.data))
    } catch {
        throw new Error("add err");
    }
}