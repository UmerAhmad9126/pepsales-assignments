import { FETCH_STOCKS_FAILURE, FETCH_STOCKS_REQUEST, FETCH_STOCKS_SUCCESS } from "./actionType";
import axios from "axios";

const getStockSuccess = (payload) => {
    return { type: FETCH_STOCKS_SUCCESS, payload }
}

const getStockFailure = () => {
    return { type: FETCH_STOCKS_FAILURE }
}


const getStockRequest = () => {
    return { type: FETCH_STOCKS_REQUEST }
}


export const getStockData = () => (dispatch) => {

    dispatch(getStockRequest());

    axios.get("https://nse-stock-market-india.p.rapidapi.com/symbols",
        {

            headers: {
                'X-RapidAPI-Key': 'd48871fcd6msh0dd019c0ea0559cp1d5262jsnb494e75871fa',
                'X-RapidAPI-Host': 'nse-stock-market-india.p.rapidapi.com'
            },

        }
    )
        .then((res) => {
            dispatch(getStockSuccess(res.data));
        })
        .catch((err) => {
            dispatch(getStockFailure(err));
            console.log('err:', err);
        })

}