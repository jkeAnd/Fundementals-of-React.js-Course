import {useState} from "react";

const ToggleButton = () => {
    const [buttonState, setButtonState] = useState(false);

    return (
        <button onClick={() => setButtonState(!buttonState)}>
            {buttonState ? "ON" : "OFF"}
        </button>
    )
}

export default ToggleButton;