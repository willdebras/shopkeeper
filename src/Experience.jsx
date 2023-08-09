import { useEffect, useRef, useState, Suspense } from 'react'
import * as THREE from 'three'

import { Sky, PresentationControls, PerspectiveCamera } from '@react-three/drei'

export default function Experience() {

    const camera = useRef()


    return <>

        <color args={ [ 'lightgrey' ] } attach="background"></color>

        <PerspectiveCamera makeDefault ref={camera}/>

        <PresentationControls
            global
            enabled={true}
            cursor={false}
            polar={ [ -0.1, 0.1 ] }
            azimuth={ [ -0.2, 0.2 ] }
            config={ { mass: 2, tension: 100 } }
            snap={ { mass: 4, tension: 100 } }
        >
        </PresentationControls>

        {/* <Sky /> */}

    </>

}
