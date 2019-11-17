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
                return [...state, action.payload]
            }
        case types.UPDATE_EMPLOYEE:
            {
                console.log(action.payload.employee)
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