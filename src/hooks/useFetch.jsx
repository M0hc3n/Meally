import { useState , useEffect } from "react";

import  { API_KEY , REQUEST_BY_ID_KEY, REQUEST_URL_ALL_KEY, 
          REQUEST_BY_NAME_KEY, REQUEST_URL_BY_RECEIPE_NAME, 
          REQUEST_URL_BY_ID, DEFAULT_NUMBER_OF_RECEIPES, 
          DEFAULT_REQUEST_URL} from "./utils/keyWords"

const useFetch = (searchedFor) =>{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({show: false, msg: ""})
    const [data , setData] = useState([])
    

    const fetchData = async (url) => {
        setLoading(true)

        try {
            const res = await fetch(url)
            const data = await res.json()

            if(data){
                setData( data )
            } else{
                console.log("could not retrieve requested data");
            }

        } catch (error) {
            console.log(error);
            setError({show: true, msg: "Failed to load ressources"})
        }

        setLoading(false)
    }

    useEffect(() =>{
        let url

        switch (searchedFor.searchThrough) {
            
            case REQUEST_URL_ALL_KEY:
                url = DEFAULT_REQUEST_URL + `?apiKey=${API_KEY}`
                break;
    
            case REQUEST_BY_NAME_KEY:
                url = REQUEST_URL_BY_RECEIPE_NAME + `?apiKey=${API_KEY}&query=${searchedFor.search}`
                break;
            
            case REQUEST_BY_ID_KEY:
                url = REQUEST_URL_BY_ID + `${searchedFor.search}/information/?apiKey=${API_KEY}`
                break;
    
            default:
                break;
        }

        fetchData(`${url}&number=${DEFAULT_NUMBER_OF_RECEIPES}`)
    }, [searchedFor])

    return {loading, data, error}
}

export default useFetch