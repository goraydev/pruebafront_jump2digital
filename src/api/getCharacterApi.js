import { getEnvariables } from "../helpers/getEnvariables"

const { VITE_API_URL } = getEnvariables();
const getCharacterApi = async (letter = "") => {


    const url = `${VITE_API_URL}/character/?name=${letter}`;
    const resp = await fetch(url);
    const res = await resp.json();

    return res;
}

export default getCharacterApi;