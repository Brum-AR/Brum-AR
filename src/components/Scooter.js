import React from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import texture from '../img-1.jpg'

const Scooter = () => {
  //  const colorMap = useLoader(TextureLoader, texture)
  return (
    <mesh rotation={[90,0,20]}>
        <boxBufferGeometry attach='geometry' args={[3,3,3]}/>
        {/* <meshLambertMaterial attach='material' color="blue" /> */}
        <meshNormalMaterial attach='material'  />
</mesh>
  )
}

export default Scooter