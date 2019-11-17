import {createStore, combineReducers, applyMiddleware} from 'redux';
import employeeReducer from '../redux/employee/reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({
    employees: employeeReducer
});

const persistedState = localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')) : {}


const store = createStore(rootReducers, persistedState,
    composeWithDevTools(applyMiddleware(thunk))
    )

store.subscribe(()=>{
    localStorage.setItem('employees', JSON.stringify(store.getState()))
    })


export default store;
