/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useGLTF, useTexture, Resize } from "@react-three/drei"
import * as THREE from "three"

import { mapping } from '../mapping.js'

  export default function InspectedMesh({modelName}) {

    // const box =  new THREE.Box3([new THREE.Vector3(-2, -2, -2), new THREE.Vector3(2, 2, 2)])

    const modelMapping = mapping[modelName]

    const model = useGLTF(`./models/${modelMapping?.model}`)
    const texture = useTexture(`./textures/${modelMapping?.texture}`)
    texture.flipY = false
    
    const rotation = modelMapping.rotationY

    console.log(model.nodes[Object.keys(model.nodes)[1]])

    return <>
    <Resize width={true} height={true} >
        <mesh 
            geometry={ model.nodes[Object.keys(model.nodes)[1]].geometry } 
            // position={ model.nodes[Object.keys(model.nodes)[1]].position }
            scale={ model.nodes[Object.keys(model.nodes)[1]].scale }
            rotation={ model.nodes[Object.keys(model.nodes)[1]].rotation }
            rotation-y={rotation}
        >
            <meshBasicMaterial map={ texture } attach='material' />
        </mesh>
    </Resize>

    </>
  }