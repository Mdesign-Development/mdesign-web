import { useEffect, useRef, useState } from 'react'
import Nav from './componets/Nav'
import Hero from './modules/Hero'
import Preloader from './modules/Preloader'
import styles from './styles/App.module.css'

const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  const videoRef=useRef<any>()

  useEffect(() => {
        
    if(videoRef.current !== undefined){
      videoRef.current.play()
    }
        
  },[videoRef])
  
  return (
    <div className={styles.app}>
      <div className={styles.videoBack}>
        <video muted ref={videoRef} src="/img/nebula_uno.mp4" autoPlay loop></video>
      </div>
      <Nav/>
      <Hero handleLoader={setIsLoading}/>
      {
        isLoading && <Preloader />
      }
    </div>
  )

}

export default App
