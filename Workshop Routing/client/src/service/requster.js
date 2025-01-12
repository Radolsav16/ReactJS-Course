import { data } from "react-router-dom";

async function requester(method,url,data){
    const options = {
        method,
        headers:{
            "Content-Type":"application/json"
        }
    }

    if(data){
        options.body = JSON.stringify(data);
    }


    const responce = await fetch(url,options);
    const result = await responce.json();

    return result;
}



async function get(url) {
    return await requester('GET',url)
}

async function post(url,data) {
    return await requester('POST',url,data)
}

async function put(url,data) {
    return await requester('PUT',url,data)
}

async function del(url) {
    return await requester('DELETE',url)
}


export const api = {
    get,
    post,
    put,
    del
}