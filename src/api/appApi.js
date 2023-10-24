import { getEnvariables } from "../helpers/getEnvariables"

const { VITE_API_URL } = getEnvariables();

const appApi = async (page, name) => {
    if (name !== undefined) {

        const url = `${VITE_API_URL}/character?page=${page}&name=${name}`;
        const resp = await fetch(url);
        const res = await resp.json();
        return res;
    }


    const url = `${VITE_API_URL}/character?page=${page}`;
    const resp = await fetch(url);
    const res = await resp.json();
    return res;
}

export default appApi;