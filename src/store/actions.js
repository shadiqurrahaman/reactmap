export const USER_LOGIN = 'USER_LOGIN'
export const REMOVE_USER_TOKEN = 'REMOVE_USER_TOKEN'
export const GET_NEXT_PAGE_PLACE = 'GET_NEXT_PAGE_PLACE'
export const GET_ALL_PLACE = 'GET_ALL_PLACE'

export const loginUser=(user,navigate)=>({type:USER_LOGIN,user,navigate})
export const logout=(navigate)=>({type:REMOVE_USER_TOKEN,navigate})
export const getnextpage = (url)=>({type:GET_NEXT_PAGE_PLACE,url})
export const getallPlace=(item)=>({type:GET_ALL_PLACE,item})