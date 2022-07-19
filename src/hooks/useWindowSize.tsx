import { useEffect, useState } from "react"

interface PropsWindow {
    width: number,
    height: number
}

const useWindowSize = ()=>{

    const [windowSize, setWindowSize] = useState<PropsWindow>()

    useEffect(() => {

        const handleResize = () =>{
            setWindowSize(
                {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            )
        }
        
        window.addEventListener("resize", handleResize)

        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
        
    }, [])
    
    return windowSize

}

export default useWindowSize