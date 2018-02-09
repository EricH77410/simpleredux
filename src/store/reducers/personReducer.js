import * as actionType from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initState = {
    persons:[{id:1, name: 'Rico', age:47}]
}

const removePerson = (state, action) => {
    const newArray = state.persons.filter((p)=>{
        return p.id !== action.id
    });
    return updateObject(state, {persons: newArray});
}

const addPerson = (state, action) => {
    const newPers = {
        id: Math.random(),
        name: action.pers.name,
        age: action.pers.age
    }
    const newArr = state.persons.concat(newPers);
    return updateObject(state, {persons: newArr});
}

const personReducer = (state = initState, action) => {
    switch(action.type) {
        case actionType.ADD_PERSON: return addPerson(state, action);
        case actionType.REMOVE_PERSON: return removePerson(state, action);
        default: return state
    }
}

export default personReducer;