import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_ERROR} from '../constants/';
import getDataApi from '../api/api'

export const getData = () => {
    return {
        type: FETCHING_DATA
    }
}

export const getDataSuccess = data => {
    return {
        type: FETCHING_DATA_SUCCESS,
        data
    }
}

export const getDataFailure = (err) => {
    return {
        type: FETCHING_DATA_ERROR,
        err
    }
}

// async thunk fetchData
export const fetchData = (genres) => {
    return (dispatch) => {
        dispatch(getData())
        getDataApi(genres)
            .then(([response, json]) => {
                dispatch(getDataSuccess(json))
            })
            .catch((err) => dispatch(getDataFailure(err)))
    }
}