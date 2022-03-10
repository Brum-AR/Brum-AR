import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import './ArItem.css'
import AnimatedSphere from './AnimatedSphere'
import Scooter from './Scooter'




const ArItem = () => {
  return (
      <>
      <Canvas className='canvas'>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2,5,2]} intensity={1} />
          <Suspense fallback={null}> <Scooter /></Suspense>
         </Canvas>
         <Canvas className='canvas'>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2,5,2]} intensity={1} />
          <AnimatedSphere />
         </Canvas>
         {/* <Canvas className='canvas'>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2,5,2]} intensity={1} />
           <Suspense fallback={null}> <Car /></Suspense>
         
         </Canvas> */}
       
         
    <div>ArItem</div>
    </>
  )
}

export default ArItem