import { FETCH_STOCKS_FAILURE, FETCH_STOCKS_REQUEST, FETCH_STOCKS_SUCCESS } from "./actionType"

const initialState = {
    isLoading: false,
    isError: false,
    stockData: [],
}


export const stockReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_STOCKS_REQUEST: return { ...state, isLoading: true, isError: false };
        case FETCH_STOCKS_FAILURE: return { ...state, isError: true, isLoading: false };
        case FETCH_STOCKS_SUCCESS: return { ...state, isLoading: false, isError: false, stockData: payload };
        default: return state;
    }
}