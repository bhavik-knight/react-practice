import React from "react"
import Confetti from "react-confetti"
import { useState, useEffect } from "react"
import { GameText } from "./Text.jsx"
import { Die } from "./Die.jsx"
import { nanoid } from "nanoid"

function Box() {
    // for tenzies number of dice are 10
    const numDice = 10

    // set the dice array having 10 randomly generated die objects
    const [dice, setDice] = useState(() => rollNewDice(numDice))

    // game win/lose state
    const [isWon, setIsWon] = useState(false)

    // display button
    const [button, setButton] = useState(displayResetButton(false))

    // number of turns to complete the game
    const [turns, setTurns] = useState(0)

    // keep track of the score
    const [score, setScore] = useState([])

    // render this function whenever dice changes
    useEffect(() => {
        // check if all dice are selected
        let allSelected = dice.every(die => die.isSelected)

        //  pick a value to check if only all values are dice are selected: use short-circuit
        let checkVal = allSelected && dice[0].value

        // check value against all the values of the dies (selected or otherwise)
        let allSame = dice.every(die => die.value === checkVal)

        // if all are selected and all are the same then game is won
        setIsWon(allSelected && allSame)

        // do some tasks on winning the game
        if (isWon) {
            // display console log
            console.log("You win!")

            // display some text on winning the game
            document.querySelector(".gameStatusArea").style.visibility = `visible`

            // display the title according to the game status
            document.title = "Tenzies - Win"

            // display the button according to the game status
            // display the game won button
            setButton(displayResetButton(true))
        } else {
            document.querySelector(".gameStatusArea").style.visibility = `hidden`
            document.title = "Tenzies - Game"
            setButton(displayResetButton(false))
        }
    }, [dice, isWon])

    // function to create a die object
    function createNewDie() {
        return {
            id: nanoid(),
            value: Math.ceil(Math.random() * 6),
            isSelected: false
        }
    }

    // roll dice with all random number generated between 1-6 inclusive
    function rollNewDice(numberOfDice = 5) {
        let diceArray = []
        for (let i = 0; i < numberOfDice; i++) {
            diceArray.push(createNewDie())
        }
        return diceArray
    }

    // to handle the new roll of dice on the roll button click event
    function handleNewRoll() {
        setTurns(prevTurn => prevTurn + 1)
        setDice(prevDice => prevDice.map(function (die) {
            if (die.isSelected) {
                return die
            } else {
                return createNewDie()
            }
        }))
    }

    // to change the selected state of die if clicked
    function handleHold(dieId) {
        setDice(prevDice => prevDice.map(function (die) {
            if (die.id === dieId) {
                return { ...die, isSelected: !die.isSelected }
            } else {
                return die
            }
        }))
    }

    // convert dice array to dice tiles to render on the page
    const diceArray = dice.map(function (die) {
        const { id, value, isSelected } = die
        return <Die
            key={id}
            id={id}
            dieFace={value}
            dieSelected={isSelected}
            onHold={() => handleHold(id)}
        />
    })

    function displayResetButton(isWon) {
        if (isWon) {
            return <button
                className="resetButton"
                onClick={resetGame}
            >
                new game
            </button>
        } else {
            return <button
                className="rollButton"
                onClick={handleNewRoll}
            >
                roll
            </button>
        }
    }

    // reset the game on clicking that button
    function resetGame() {
        setDice(rollNewDice(numDice))
        setIsWon(false)
        setButton(displayResetButton(false))
        setTurns(0)
    }

    return (
        <main className="gameBox">
            <div className="gameArea">
                <GameText />
                <div className="diceArea">
                    {diceArray}
                </div>
                <div className="buttonArea">
                    {button}
                </div>
                <h2>Number of rolls to win: {turns}</h2>
            </div>

            <div className="gameStatusArea">
                {/* display the game winning text */}
                <h1>Congratulations! You Win</h1>
            </div>
            {isWon && <Confetti width={window.innerWidth} height={window.innerHeight} />}
        </main >
    )
}

export { Box };
