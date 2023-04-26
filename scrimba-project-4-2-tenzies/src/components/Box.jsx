import React from "react"
import { RollButton } from "./Button.jsx"
import { GameText } from "./Text.jsx"
import { Dice } from "./Dice.jsx"

function Box() {

    const [dice, setDice] = React.useState(() => rollNewDice())

    function numToDie(numArray = []) {
        return numArray.map((die, index) => <Dice key={index} dieFace={die} />)
    }

    function rollNewDice(numDice = 10) {
        const randomNumbers = []
        for (let i = 0; i < numDice; i++) {
            randomNumbers.push(
                Math.floor(Math.random() * 6) + 1
            )
        }
        return randomNumbers
    }

    function handleNewRoll(newDice) {
        setDice(prevDice => newDice)
    }

    return (
        <main className="gameBox">
            <div className="gameArea">
                <GameText />
                <div className="diceArea">
                    {numToDie(dice)}
                </div>
                <div className="rollButtonArea">
                    <RollButton
                        newDice={rollNewDice()}
                        handleNewRoll={(dice) => handleNewRoll(dice)}
                    />
                    {/* <button className="rollButton" onClick={handleNewRoll}> Roll </button> */}
                </div>
            </div>
        </main>
    )
}

export { Box };
