import React from "react"

function Die(props) {
    const dieClass = props.dieSelected ? "dieSelected" : ""
    return (
        <button
            className={`dieButton ${dieClass}`}
            onClick={() => props.onHold(props.id)}
        >
            {props.dieFace}
        </button >
    )
}

export { Die }
