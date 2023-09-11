export const loginUserAuth=(user)=>{
    localStorage.setItem("user",JSON.stringify(user))
}

export const logoutUserAuth=()=>{
    if(isLogedIn()){
        localStorage.removeItem("user")
    }
    
}

export const isLogedIn=()=>{
    if(localStorage.getItem("user")){
        return true
    }else{
        false
    }
}

export const getUserDetails=()=>{
    if(isLogedIn()){
        return JSON.parse(localStorage.getItem("user"))
    }else{
        return undefined
    }
}



export const getToken=()=>{
    if(isLogedIn()){
       return getUserDetails().token
    }else{
        return undefined
    }
}