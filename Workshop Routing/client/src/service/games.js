import { api } from "./requster";

const baseUrl = 'http://localhost:3030/jsonstore/games';


async function getThreeLates (){
    const data = await api.get(baseUrl);

    return data;
}


async function createGame(data) {
    await api.post(baseUrl,data);
}

async function gameFromId(id) {
    const data = await api.get(baseUrl + `/${id}`);   
    return data;
}

export const gamesApi = {
    getThreeLates,
    createGame,
    gameFromId
}