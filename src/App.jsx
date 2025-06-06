import { useState } from 'react'
import Card from './components/Card'
import './App.css'

// keys = [] (12 keys for images)
let images = [16568]
function App() {


  return (
    <div>
      {images.map(imageID => (
        <Card imageID={imageID} key={Math.random()} />
      ))}
    </div>
  )
}

export default App
