
import React from 'react';
import {Canvas} from '@react-three/fiber';
import {Model} from './assets/Components/Model';
import { Environment, OrbitControls } from '@react-three/drei';


function App() {
  
  return (
    <>
      <div className='canva'>
        <Canvas>
        <Model/>
        <Environment preset='sunset'/> 
        <OrbitControls/>       
        
        </Canvas>
      </div>
    </>
  )
}

export default App
