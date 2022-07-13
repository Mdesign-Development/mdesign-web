import { Suspense, useEffect, useRef, useState } from 'react'
import { ILoadedModel, Model} from 'react-babylonjs'
import { Vector3, Camera, Color4 } from '@babylonjs/core'
import '@babylonjs/loaders'
import '@babylonjs/gui'
import styles from '../styles/App.module.css'
import SceneComponent from '../componets/SceneComponent'

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

        /* console.log(camera)
        console.log(scene)
        console.log(model) */
        if(scene){
            scene.clearColor = new Color4(0, 0, 0, 0);
        }
        
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
                        lowerRadiusLimit={30}
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
                            position={new Vector3(0,-35,0)}
                            pluginExtension={'.glb'}
                            onModelLoaded={(model)=>getDataModel(model)}
                        />
                    </Suspense>
                </SceneComponent>
            </div>
            <div className={styles.hero}>
                <h1>MDesign</h1>
                <p><span>MDesign</span> es un estudio creativo de productos digitales útiles, que se mantiene en constante innovación; más que un proveedor tecnológico, somos un aliado estratégico que contribuye en la evolución y transformación digital de cualquier emprendimiento</p>
            </div>
        </>
    )
}

export default Hero