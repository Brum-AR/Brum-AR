import React, {useRef, Suspense} from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

import './ArItem.css'





function Scooter() {
    const { scene } = useGLTF('/Scooter.glb')
    return (
        <primitive object={scene} scale={0.3} position={[0, -2, 0]} rotation={[0, Math.PI / 2, 0]}/>
    );
}

export default function Test() {
    return (
        <>
        <Canvas className="canvas" >
            <ambientLight intensity={1} />
             <directionalLight position={[-2,5,2]} intensity={0.5} />
            <Suspense fallback={null}>
                <Scooter />
                 <Environment preset="dawn" background />
                <OrbitControls />
            </Suspense>
        </Canvas>
       
        </>
    );
}