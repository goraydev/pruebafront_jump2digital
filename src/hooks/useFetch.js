import { useState } from "react"
import appApi from "../api/appApi";
import { useEffect } from "react";

const useFetch = (currentPage) => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let newCharacters = [];

    const getCharacters = async () => {
        newCharacters = await appApi(currentPage);

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