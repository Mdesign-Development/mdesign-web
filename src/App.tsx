import { useEffect, useRef, useState } from 'react'
import Nav from './components/Nav'
import { GlobalProvider } from './context/GlobalProvider'
import Hero from './modules/Hero'
import Preloader from './modules/Preloader'
import Services from './modules/Services'
import styles from './styles/App.module.css'

const App = () => {

  const [isLoading, setIsLoading] = useState(false)
  const videoRef=useRef<any>()

  useEffect(() => {
        
    if(videoRef.current !== undefined){
      videoRef.current.play()
    }
        
  },[videoRef])
  
  return (
    <GlobalProvider>
      <div className={styles.app}>
        <div className={styles.videoBack}>
          <video muted ref={videoRef} src="/img/nebula_uno.mp4" autoPlay loop></video>
        </div>
        <Nav/>
        {/* <Hero handleLoader={setIsLoading}/> */}
        <Services/>
        { isLoading && <Preloader /> }
      </div>
    </GlobalProvider>
    
  )

}

export default App
