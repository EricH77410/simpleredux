import * as actionType from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initState= {
    results:[]
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter((res)=>{
        return res.id !== action.id
    })
    return updateObject(state, {results: updatedArray})
}

const result_reducer = (state = initState, action) => {

    switch(action.type) {
        case actionType.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value:action.value})})
        
            case actionType.DELETE_RESULT:
                return deleteResult(state, action);
        default:
            return state        
    }
}

export default result_reducer;