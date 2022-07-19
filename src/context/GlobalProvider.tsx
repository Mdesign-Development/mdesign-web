import { ReactNode } from "react"
import Preloader from "../modules/Preloader"
import { GlobalContext } from "./GlobalContext"

interface Props {
    children: JSX.Element | JSX.Element[]
}
interface stateCOntext {
    module: ReactNode,
    isLoading: boolean
}

const INITIAL_STATE:stateCOntext = {
    module: <Preloader/>,
    isLoading: true
}

export const GlobalProvider = ({children}:Props) => {
    return (
        <GlobalContext.Provider value={{}}>
            {children}
        </GlobalContext.Provider>
    )
}
