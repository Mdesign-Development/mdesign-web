import { Suspense, useEffect, useRef, useState } from 'react'
import { ILoadedModel, Model} from 'react-babylonjs'
import { Vector3, Camera, Color4 } from '@babylonjs/core'
import '@babylonjs/loaders'
import '@babylonjs/gui'
import styles from '../styles/App.module.css'
import SceneComponent from '../components/SceneComponent'
import { IconTeam } from '../components/Icons'
import BtnLine from '../components/BtnLine'

interface Props{
    handleLoader:React.Dispatch<React.SetStateAction<boolean>>
}

const Hero = ({handleLoader}:Props) => {
    
    const [camera, setCamera] = useState<Camera>()
    const [model, setModel] = useState<ILoadedModel>()
    const [scene, setScene] = useState<any>()

    const  getDataModel = (model:ILoadedModel)=>{

        setScene(model.rootMesh?._scene);
        setModel(model)
        setTimeout(() => {
            handleLoader(false)
        }, 3000);
        
    }

    useEffect(() => {

        if( scene ){ scene.clearColor = new Color4(0, 0, 0, 0) }
        
    }, [camera, scene, model])

    return (
        <>
            <div className={styles.canvasModel}>
                <SceneComponent>
                    <hemisphericLight name='light' direction={Vector3.Up()}  intensity={1} />
                    <arcRotateCamera 
                        name="camera-model"
                        alpha={1.2}
                        beta={1}
                        radius={100}
                        target={new Vector3(0,0,0)}
                        upperBetaLimit={1.45}
                        lowerBetaLimit={0}
                        lowerRadiusLimit={40}
                        upperRadiusLimit={150}
                        useAutoRotationBehavior={true }
                        onCreated={camera=>setCamera(camera)}
                    />
                    <Suspense fallback>
                        <Model 
                            name='astronauta'
                            sceneFilename={'astronauta.glb'}
                            rootUrl={'/models/'}
                            scaling={new Vector3(120,120,120)}
                            position={new Vector3(4,-35,0)}
                            pluginExtension={'.glb'}
                            onModelLoaded={(model)=>getDataModel(model)}
                        />
                    </Suspense>
                </SceneComponent>
            </div>
            <div className={styles.hero}>
                <h1>MDesign</h1>
                <p><span>MDesign</span> es un estudio creativo de productos digitales ??tiles, que se mantiene en constante innovaci??n; m??s que un proveedor tecnol??gico, somos un aliado estrat??gico que contribuye en la evoluci??n y transformaci??n digital de cualquier emprendimiento</p>
                <BtnLine txt={'Conoce el equipo'} icon={<IconTeam/>}/>
            </div>
        </>
    )
}

export default Hero