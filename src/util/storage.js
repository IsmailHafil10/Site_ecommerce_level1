import lodash from 'lodash'

export const TOKEN= "auth-token"

export const getToken=()=>{
    return localStorage.getItem(TOKEN)?? null
}

export const addToken=(token)=>{
    localStorage.setItem(TOKEN, token)
}

export const removeToken=()=>{
    localStorage.removeItem(TOKEN)
}

export const getPayload=(myToken=null)=>{
   const token= getToken()|| myToken
   if(token){
    const secondSegment=lodash.split(token,".")[1]
    return atob(secondSegment)
   }
else return null;

}