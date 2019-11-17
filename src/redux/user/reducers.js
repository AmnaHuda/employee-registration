 const userReducer = (state = {}, action) => {
     switch (action.type){
         case "LOGIN_USER": { return state = action.payload }

         case "LOGOUT_USER": {
             localStorage.setItem("state", {})
            
             return state = {}
            }

        default: return state
     }

}

export default userReducer;