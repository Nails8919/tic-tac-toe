import { useState } from "react"
import Square from "./Square"

function App() {
  const CIRCLE = "CIRCLE"
  const CROSS = "CROSS"
  const EMPTY = "EMPTY"

  const [squares, setSquares] = useState({
    player: CROSS,
    position: [
      EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY
    ],
  })

  const checkWinner = (theGrid) => {
    // Check rows
    for (let offset = 0; offset <= 6; offset += 3) {
      if (theGrid[0 + offset] != EMPTY && theGrid[0 + offset] == theGrid[1 + offset] && theGrid[1 + offset] == theGrid[2 + offset]) {
        alert(`Player ${theGrid[0 + offset]} wins!`)
      }
    }
    // Check columns
    for (let offset = 0; offset <= 2; offset += 1) {
      if (theGrid[0 + offset] != EMPTY && theGrid[0 + offset] == theGrid[3 + offset] && theGrid[3 + offset] == theGrid[6 + offset]) {  
        alert(`Player ${theGrid[0 + offset]} wins!`)
      }
    }
    // Check diagonals
    if (theGrid[0] != EMPTY && theGrid[0] == theGrid[4] && theGrid[4] == theGrid[8]) {
      alert(`Player ${theGrid[0]} wins!`)
    }
    if (theGrid[2] != EMPTY && theGrid[2] == theGrid[4] && theGrid[4] == theGrid[6]) {
      alert(`Player ${theGrid[2]} wins!`)
    }
    // Check for draw
    if (!theGrid.includes(EMPTY)) {
      alert("It's a draw!") 
    }
  }
  const handleTurn = (pos) => {
    const allsquarepositions = [...squares.position]
    allsquarepositions[pos] = squares.player
    setSquares({
      player: squares.player == CROSS ? CIRCLE : CROSS,
      position: allsquarepositions,
    })
    checkWinner(allsquarepositions)
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl"> Tic tac Tac</h1>
      <div className="grid grid-cols-3 bg-gray-400 gap-1">
        <Square position={0} value={squares.position[0]} takeTurn={handleTurn} />
        <Square position={1} value={squares.position[1]} takeTurn={handleTurn} />
        <Square position={2} value={squares.position[2]} takeTurn={handleTurn} />
        <Square position={3} value={squares.position[3]} takeTurn={handleTurn} />
        <Square position={4} value={squares.position[4]} takeTurn={handleTurn} />
        <Square position={5} value={squares.position[5]} takeTurn={handleTurn} />
        <Square position={6} value={squares.position[6]} takeTurn={handleTurn} />
        <Square position={7} value={squares.position[7]} takeTurn={handleTurn} />
        <Square position={8} value={squares.position[8]} takeTurn={handleTurn} />
      </div>
      <div className="flex items-center justify-center">
        <p className="text-xl">Player {squares.player == CROSS ? "X's" : "O's"} turn</p>
      </div>
    </div>
  )
}

export default App