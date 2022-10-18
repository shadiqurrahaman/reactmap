import axios from 'axios'

const instance = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    headers: {
        'content-type':'application/octet-stream',
        'x-rapidapi-host':'example.com'
       
    },
});

export default {
    logout: () =>
    instance({
        'method':'post',
        'url':'/logout',
        'headers': {
            'content-type':'application/json',
            'Authorization': 'bearer '+localStorage.getItem('token')
        }
    }).then((result)=>result.data),


    login: (payload) =>
    instance({
        'method': 'POST',
        'url':'login',
        'data': {
            'email':payload.email,
            'password':payload.password
        },
        'headers': {
            'content-type':'application/json'  // override instance defaults
        }
    }).then((result)=> result.data),


    forgetpassword: (payload) =>
    instance({
        'method': 'POST',
        'url':'forget_password',
        'data': {
            'email':payload.email
        },
        'headers': {
            'content-type':'application/json'  // override instance defaults
        }
    }).then((result)=> result.data),

    changepassword: (payload) =>
    instance({
        'method': 'POST',
        'url':'changePassword',
        'data': {
            'email':payload.email,
            'token':payload.token,
            'password':payload.password
        },
        'headers': {
            'content-type':'application/json'  // override instance defaults
        }
    }).then((result)=> result.data),

    register: (payload) =>
    instance({
        'method': 'POST',
        'url':'register',
        'data': {
            'email':payload.email,
            'name':payload.name,
            'password':payload.password
        },
        'headers': {
            'content-type':'application/json'  // override instance defaults
        }
    }).then((result)=> result.data)


}