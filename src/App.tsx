import React, { MouseEvent, useEffect, useState } from 'react'
import './App.css'
import wordList from './words.json'

function App() {
  const [word, setWord] = useState(wordList[Math.floor(Math.random() * 1024)])
  const [blanks, setBlanks] = useState(() => {
    let someString = ''
    for (let i = 0; i < word.length; i++) {
      someString += '_'
    }
    return someString
  })

  const snowmen = [
    <img src={'./src/snowman/step_0.png'} className="App-logo" />,
    <img src={'./src/snowman/step_1.png'} className="App-logo" />,
    <img src={'./src/snowman/step_2.png'} className="App-logo" />,
    <img src={'./src/snowman/step_3.png'} className="App-logo" />,
    <img src={'./src/snowman/step_4.png'} className="App-logo" />,
    <img src={'./src/snowman/step_5.png'} className="App-logo" />,
    <img src={'./src/snowman/step_6.png'} className="App-logo" />,
    <img src={'./src/snowman/step_0.png'} className="App-logo" />,
  ]

  const [matches, setMatches] = useState(0)
  const [snowman, setSnowman] = useState(snowman[matches])

  function handleClickLetter(event: MouseEvent) {
    const letter = event.target as HTMLButtonElement
    let l = letter.innerHTML
    var tempString = blanks
    var tempMatches = matches

    for (let i = 0; i < word.length; i++) {
      if (l.toLowerCase() == word.charAt(i).toLowerCase()) {
        tempString =
          tempString.substring(0, i) + l + tempString.substring(i + 1)

        tempMatches = tempMatches + 1
      }
    }

    setMatches(tempMatches)
    setBlanks(tempString)
    setSnowman(snowmen[tempMatches])

    letter.className = 'disabled'
  }

  return (
    <div className="App">
      <header className="App-header">
        {snowman}
        <p>{blanks}</p>
        <div>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            Q
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            W
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            E
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            R
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            T
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            Y
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            U
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            I
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            O
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            P
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            A
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            S
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            D
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            F
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            G
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            H
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            J
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            K
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            L
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            Z
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            X
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            C
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            V
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            B
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            N
          </button>
          <button
            onClick={(event) => {
              handleClickLetter(event as unknown as MouseEvent)
            }}
          >
            M
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
