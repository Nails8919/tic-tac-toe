import Circle from "./Circle"
import Cross from "./Cross"

const Square = (props) => {
    const CIRCLE = "CIRCLE"
    const CROSS = "CROSS"
    const EMPTY = "EMPTY"

    const handleClick = () => {
        if (props.value == EMPTY) {
            props.takeTurn(props.position)
        }
    }

    return (
        <div className="bg-white w-24 h-24 flex justify-center items-center" onClick={handleClick}>
            {props.value == CIRCLE && <Circle />}
            {props.value == CROSS && <Cross />}
        </div>
    )
}

export default Square