import { ReactElement, useEffect, useState } from 'react'
import { Engine, Scene, useScene  } from 'react-babylonjs'
import '@babylonjs/loaders'
import '@babylonjs/gui'



interface Props{
    children: ReactElement | ReactElement[]
}

const SceneComponent = ({children}:Props) => {
    
    return (
        <Engine 
            antialias 
            adaptToDeviceRatio 
            canvasId='canvas'
            
        >
            <Scene >
                {children}
            </Scene>
        </Engine>
    )
}

export default SceneComponent