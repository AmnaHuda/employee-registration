import {createStore, combineReducers, applyMiddleware} from 'redux';
import employeeReducer from '../redux/employee/reducer'
import userReducer from '../redux/user/reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({
    employees: employeeReducer,
    user: userReducer
});

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {}

const store = createStore(rootReducers, persistedState,
    composeWithDevTools(applyMiddleware(thunk))
    )

store.subscribe(()=>{
    localStorage.setItem('state', JSON.stringify(store.getState()))
    })


export default store;
