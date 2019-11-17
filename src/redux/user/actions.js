import axios from 'axios'


export const loginUser = (user) => {
    return(dispatch)=>{
        axios.post("http://localhost:8000/login", user).then((res)=>{
            return dispatch({type:"LOGIN_USER", payload:{email: user.email, token:res.data.isAuth}})
        }).catch((err)=>{
            console.log("Failed Logging In")
        })
    }
}

export const logoutUser = () => {
    return(dispatch)=>{
        return dispatch({type:"LOGOUT_USER", payload:""})
    }
} 