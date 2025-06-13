import { useState } from 'react'
import Card from './components/Card'
import Score from './components/Score'
import './App.css'
import './styles.css'

const images = [16568, 81557, 212760, 9010, 14598, 86385, 117188, 76395, 97465, 9553]
const paintings = images.map(id => ({ imageID: id, clicked: false }))

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  function handleClick(event) {
    const clickedPainting = paintings.find(obj => obj.imageID == event.target.id)
    if (clickedPainting.clicked) {
      paintings.sort(() => Math.random() - 0.5)
      paintings.forEach(obj => obj.clicked = false)
      setScore(0)
    } else {
      clickedPainting.clicked = true
      paintings.sort(() => Math.random() - 0.5)
      setScore(score + 1)
      bestScore < score + 1 ? setBestScore(score + 1) : null
    }

  }

  return (
    <div>
      <header>
        <div className="headerInfo">
          <p className='title'>Memory Card Game</p>
          <p className='rules'>Get points by clicking on an image but don't click on any more than once!</p>
        </div>
        <div className="points">
          <Score points={score} bestPoints={bestScore} />
        </div>
      </header>
      <div className='cardGrid'>
        {paintings.map(painting => (
          <Card imageID={painting.imageID} key={painting.imageID} onClick={handleClick} />
        ))}
      </div>
    </div>
  )
}

export default App
