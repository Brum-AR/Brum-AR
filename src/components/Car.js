import React, {Suspense} from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

function Car() {
    const { scene } = useGLTF('/car.gltf')
    return (
        <primitive object={scene} scale={10}/>
    );
}

export default function Test() {
    return (
        <Canvas className="canvas">
            <ambientLight intensity={1} />

            <Suspense fallback={null}>
                <Car />
                <OrbitControls />
            </Suspense>
        </Canvas>
    );
}
