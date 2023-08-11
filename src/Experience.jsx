/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import InspectedMesh from './components/InspectedMesh.jsx'

import { Stage, PresentationControls, Center, Backdrop } from '@react-three/drei'

export default function Experience({selectedModel}) {

    return <>

        <color args={ [ 'darkgrey' ] } attach="background"></color>

    <group position-z={3.5} position-x={-0.6}>
        <Stage adjustCamera={false}>        
            <PresentationControls
                global
                enabled={true}
                cursor={false}
                polar={ [ -0.1, 0.1 ] }
                azimuth={ [ -0.2, 0.2 ] }
                config={ { mass: 2, tension: 100 } }
                snap={ { mass: 4, tension: 100 } }
            >
                <InspectedMesh modelName={selectedModel} />
            </PresentationControls>
        </Stage>
    </group>

        {/* <Sky /> */}

    </>

}
