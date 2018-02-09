import * as actionType from './actionsTypes';

export const storeResult = (value) => {
    return  (dispatch) => {
        setTimeout( () => {
            dispatch(saveResult(value))
        }, 2000)
    }   
}

export const deleteResult = (id) => {
    return {
        type: actionType.DELETE_RESULT,
        id
    }
}

export const saveResult = (value) => {
    return {
        type: actionType.STORE_RESULT,
        value
    }
}