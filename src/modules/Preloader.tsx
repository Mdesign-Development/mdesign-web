import { useEffect, useRef } from 'react';
import styles from '../styles/Preloader.module.css'

const Preloader = () => {

    const videoRef=useRef<any>()

    const play = () => {
        videoRef.current.play();
    }

    useEffect(() => {
        
        if(videoRef.current !== undefined){
            play()
        }
            
    },[videoRef])

    return (
        <div className={styles.preloader}>
            <div className={styles.videoPreloader}>
                <video muted ref={videoRef} src="/img/nebula-dos.mp4" autoPlay loop></video>
            </div>
            <div className={styles.footerPreloader}>
                <img src="/img/footer-texture.png" alt="texture" />
            </div>
            <div className={styles.logoPreloader}>
                <img src="/img/Logomd.svg" alt="texture" />
            </div>
        </div>
    )
}

export default Preloader