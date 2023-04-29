function RollButton(props) {

    // handle calling parent functions form child element
    // reference: https://dev.to/spukas/moving-arguments-from-child-to-parent-component-in-react-25lp
    function handleClick() {
        console.log(`in child roll button - ${props.newDice}`)
        props.handleNewRoll(props.newDice)
    }

    return (
        <button
            className="rollButton"
            onClick={() => props.handleNewRoll}
        >
            Roll
        </button>
    )
}

export { RollButton }
