import types from './actionTypes';
import axios from 'axios'

export const listEmployees = () => {
   
    return (dispatch) => {
         axios.get(process.env.REACT_APP_BASE_URL).then((res)=>{
            dispatch({type:types.LIST_EMPLOYEES, payload:res.data.employees})
        }).catch((err)=>{
            console.log("Error fetching employees", err)
        })
    }
}

export const addNewEmployee = (employee) =>{
    return(dispatch) => {
        axios.post(process.env.REACT_APP_BASE_URL, employee).then((res)=>{
            dispatch({type:types.ADD_EMPLOYEE, payload: res.data.doc})
        }).catch((err)=>{
            console.log("Error adding employee", err)
        })
    }
}

export const editEmployee = (employee, index) => {
    return(dispatch) => {
        axios.post(`${process.env.REACT_APP_BASE_URL}-update`, employee).then((res)=>{
            dispatch({type:types.UPDATE_EMPLOYEE, payload:{index:index, employee:employee}})
        }).catch((err)=>{
            console.log("Error updating employee", err)
        })
    }
}

export const deleteEmployee = (id, index) => {
    return(dispatch) => {
        console.log("Id in action", id)
        console.log("index in action", index)
        axios.delete(process.env.REACT_APP_BASE_URL, {data:{id}}).then((res)=>{
            dispatch({type: types.DELETE_EMPLOYEE, payload: index})
        }).catch((err)=>{
            console.log("Error deleting employee", err)
        })
    }
}
