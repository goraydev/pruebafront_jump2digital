import { getEnvariables } from "../helpers/getEnvariables"

const { VITE_API_URL } = getEnvariables();

const appApi = async () => {
    const url = `${VITE_API_URL}/api/character`;
    const resp = await fetch(url);
    const res = await resp.json();

    return res;
}

export default appApi;