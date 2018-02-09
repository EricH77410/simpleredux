import * as actionType from '../actions/actionsTypes';
import { updateObject } from '../utility';
const initState = {
    counter: 0
}

const reducer = (state = initState, action) => {

    switch(action.type) {
        case actionType.INCREMENT:
            return updateObject(state, {counter: state.counter +1} )   
        
        case actionType.DECREMENT:
            return updateObject(state, {counter: state.counter - 1})
        case actionType.ADD:
            return updateObject(state, {counter: state.counter + action.value});

        case actionType.SUBSTRACT:
            return updateObject(state, {counter: state.counter - action.value});
        
        
        default:
            return state;
    }
    
}

export default reducer;