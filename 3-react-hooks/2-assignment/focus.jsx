import {useState, useRef, useEffect} from 'react';

// return an input box (where text can be entered)
// return a "Focus" button

// function: the focus button moves the cursor to the input box (see javascript focus)
// https://www.geeksforgeeks.org/javascript/javascript-focus-method/

// USE REF  HOOC   
// https://www.w3schools.com/react/react_useref.asp  //   


function FocusInput() {
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus(); // focus the input this maybe to the input //
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleFocus}>Focus</button>
            </div>
    );
}

export default FocusInput;