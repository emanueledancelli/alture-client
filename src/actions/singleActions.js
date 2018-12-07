import { GET_SINGLE_EVENT, CLEAN_SINGLE_EVENT } from "./types";

export const filterSingleEvent = id => (dispatch, getState) => {
    let state = getState().data
    let single = state.filter(e => e.id == id)
        
    dispatch({
        type: GET_SINGLE_EVENT,
        payload: single
    })
};
