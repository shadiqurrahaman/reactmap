export const USER_LOGIN = 'USER_LOGIN'
export const REMOVE_TOKEN = 'REMOVE_TOKEN'

export const loginUser=(token)=>({type:USER_LOGIN,token})
export const logout=()=>({type:REMOVE_TOKEN})