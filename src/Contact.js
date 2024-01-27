import {React,useState} from 'react'

function Contact() {
    const [disableInputIsChecked, setDisableInputIsChecked] =useState(false);
    const [inputValue, setInputValue] =useState("");

    function clearInput() {
        setInputValue("");
    }

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleCheckboxClick(event) {
        if (!disableInputIsChecked) { // this click was to check the box
            clearInput();
        }
        setDisableInputIsChecked(prevValue => !prevValue); // invert value
    }

    return (
        <form>
            <input type="checkbox" value={ disableInputIsChecked } onChange={ handleCheckboxClick }/>
            <input type="text" value={ inputValue } onChange={ handleInputChange } disabled={ disableInputIsChecked }/>
        </form>
    )
}


export default Contact

