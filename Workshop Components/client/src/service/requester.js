export async function requester(method,url,data){
    const options = {
        method,
        headers:{
            "Content-Type":"application/json"
        }
    }


    if(data){
        options.body = JSON.stringify(data);
    }

    try{

    const response = await fetch(url,options);
    
    const res = await response.json();
    return res;

}catch(err){
    console.log(err.message);
    return;
}

    
}


async function get(url) {
    return await requester('GET',url);
}

async function post(url,data) {
    return await requester('POST',url,data);
}

async function put(url) {
    return await requester('PUT',url,data);
}

async function del(url) {
    return await requester('DELETE',url);
}

export const requestApi = {
    get,
    post,
    put,
    del
}