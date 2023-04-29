import React, { useState, useEffect } from "react"
import { RollButton } from "./Button.jsx"
import { GameText } from "./Text.jsx"
import { Die } from "./Die.jsx"
import { nanoid } from "nanoid"

function Box() {
    // set the dice array having 10 randomly generated die objects
    const [dice, setDice] = useState((numDice = 10) => {
        let diceArray = []
        for (let i = 0; i < numDice; i++) {
            diceArray.push({
                id: nanoid(),
                value: Math.ceil(Math.random() * 6),
                isSelected: false
            })
        }
        return diceArray
    })

    // to handle the new roll of dice on the roll button click event
    function handleNewRoll() {
        setDice(prevDice => prevDice.map(function (die) {
            if (die.isSelected) {
                return die
            } else {
                return {
                    id: nanoid(),
                    value: Math.ceil(Math.random() * 6),
                    isSelected: false
                }
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

    return (
        <main className="gameBox">
            <div className="gameArea">
                <GameText />
                <div className="diceArea">
                    {diceArray}
                </div>
                <div className="rollButtonArea">
                    <button
                        className="rollButton"
                        onClick={handleNewRoll}
                    >Roll</button>
                </div>
            </div>
        </main>
    )
}

export { Box };
