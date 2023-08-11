import './App.css'
import { useState } from 'react'

import Experience from './Experience.jsx'
import { Canvas } from '@react-three/fiber'

import ShopMenu from './components/ShopMenu.jsx'

function App() {

  const [ selectedModel, setSelectedModel ] = useState('helmet')

  return (
    <>
      <Canvas> 
        <Experience selectedModel={selectedModel} />
      </Canvas>
      <ShopMenu selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
    </>
  )
}

export default App
