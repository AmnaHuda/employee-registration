import types from './actionTypes';


const employeeReducer = (state = [], action ) => {
    switch (action.type)
    {
        case types.LIST_EMPLOYEES:
            {
                return action.payload
            }
        case types.ADD_EMPLOYEE:
            {
                let newState = Object.assign([],state);
                newState.splice(0,0,action.payload)
                return newState

            }
        case types.UPDATE_EMPLOYEE:
            {
                let newState = Object.assign([], state);
                 newState[action.payload.index] = action.payload.employee
                 return newState
            }
            case types.DELETE_EMPLOYEE:
            {
                state.splice( action.payload,1);
                let newState = Object.assign([], state);
                return newState
            }
          
        
        default : return state
    }
}

export default employeeReducer;