import * as actionType from './actionsTypes';

export const savePerson = (pers) => {
    return {
        type: actionType.ADD_PERSON,
        pers
    }
}

export const addPerson = (pers) => {
    return (dispatch, getState) => {
        setTimeout( () => {
            dispatch(savePerson(pers))
        },3000)
    }
}
export const removePerson = (id) => {
    return {
        type: actionType.REMOVE_PERSON,
        id
    }
}