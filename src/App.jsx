import { useState } from "react"

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected,updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div  onClick={handleClick} className={className}>
      {children}
    </div>
  )
}



function App() {
  const [board, setBoard]= useState( Array(9).fill(null))
  const [turn, setTurn] = useState (TURNS.X)

  const checkWinner =  ((index, boardToCheck) => {
    for (let i of index ){
      if(
        boardToCheck[i] != "" && boardToCheck[i] === boardToCheck[i+1] && boardToCheck[i] === boardToCheck[i+2]
      ){
        return "hola"
      }
      
    }
    
    console.log("_______________")
  }) 

  const updateBoard = (index) => {
    //si ya esta ocupado el espaci0
    if (board[index]) return
    //actualizar
    const newBoard = [ ... board]
    newBoard[index] = turn
    setBoard(newBoard)
    //cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //revisar anador
    const winner = checkWinner(newBoard)
  }
  return (
    <main className="board">
      <h1> La Vieja</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
                
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X} </Square>
        <Square isSelected={turn === TURNS.O}> {TURNS.O} </Square>
      </section>

    </main>
   
  )
}

export default App
