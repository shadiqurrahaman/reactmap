import axios from 'axios'

const instance = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
    headers: {
        'content-type':'application/octet-stream',
        'x-rapidapi-host':'example.com'
       
    },
});

export default {
    getPlace: (payload) =>
    instance({
        'method':'GET',
        'url':'place/'+payload.item,
        'headers': {
            'content-type':'application/json',
            'Authorization': 'bearer '+localStorage.getItem('token')
        }
    }).then((result)=>result.data),

    placePaginate: (payload) =>
    instance({
        'method':'GET',
        'url':payload.url,
        'headers': {
            'content-type':'application/json',
            'Authorization': 'bearer '+localStorage.getItem('token')
        }
    }).then((result)=>result.data),


    addplace: (payload) =>
    instance({
        'method': 'POST',
        'url':'addplace',
        'data': {
            'address':payload.address,
        },
        'headers': {
            'content-type':'application/json',
            'Authorization': 'bearer '+localStorage.getItem('token')
        }
    }).then((result)=> result.data)

    


}