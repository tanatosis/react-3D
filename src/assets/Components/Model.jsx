import React from 'react';
import { useGLTF } from '@react-three/drei';


export function Model(props) {
    
    const model = useGLTF ("/scene2.glb")

    return(
        <mesh>
            <primitive object={model.scene} />
        </mesh>
    )
}

useGLTF.preload('/scene2.glb')
