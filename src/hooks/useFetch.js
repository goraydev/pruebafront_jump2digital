import { useState } from "react"
import appApi from "../api/appApi";
import { useEffect } from "react";
import getCharacterApi from "../api/getCharacterApi";

const useFetch = () => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let newCharacters = [];

    const getCharacters = async () => {
        newCharacters = await appApi();


        setTimeout(() => {

            setIsLoading(false);
            setCharacters(newCharacters);
        }, 100);
    };



    useEffect(() => {

        getCharacters();


    }, []);


    return {
        characters,
        isLoading,
        setCharacters
    }

}

export default useFetch