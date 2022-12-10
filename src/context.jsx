import { createContext
        , useState
        , useContext } from "react";

import useFetch from "./hooks/useFetch"

const AppContext = createContext()

const AppProvider = ({children}) =>{

    const [searchedFor, setSearchedFor] = useState({search: "", searchThrough:"all" })

    const {loading , error , data: receipes} = useFetch(searchedFor)


    return (
        <AppContext.Provider value={{receipes, error, loading, searchedFor, setSearchedFor}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export { AppContext , AppProvider} 