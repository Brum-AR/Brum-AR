import React, {useRef, Suspense} from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import {proxy, useSnapshot} from 'valtio'



const state = proxy({
  current: null,
  items: {
    laces: "#ff3",
    mesh: "#3f3",
    caps: "#3f3",
    inner: "#3f3",
    sole: "#3f3",
    stripes: "#3f3",
    band: "#3f3",
    patch: "#3f3",
  },
})


function Scooter() {
    const { scene } = useGLTF('/Scooter.glb')
    return (
        <primitive object={scene} scale={0.3} position={[0, -2, 0]} rotation={[0, Math.PI / 2, 0]}/>
    );
}

export default function Test() {
    return (
        <>
        <Canvas className="canvas">
            <ambientLight intensity={1} />
             <directionalLight position={[-2,5,2]} intensity={0.5} />
            <Suspense fallback={null}>
                <Scooter />
                <OrbitControls />
            </Suspense>
        </Canvas>
       
        </>
    );
}