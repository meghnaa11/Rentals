import React, {useState} from "react";
import './Form.css';

const Form = () => {
    let isNotRegistered = true;

    let [isMousedOver, setMouse] = useState(false);

    function handleClick() {
        console.log("clicked");
    }

    function handleMouseOver() {
        setMouse(true);
    }

    function handleMouseOut() {
        setMouse(false);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="form" onSubmit={handleSubmit}>
            <form className="form">
                {isNotRegistered && <input type="text" placeholder="First Name" />}
                {isNotRegistered && <input type="text" placeholder="Last Name" />}
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                {isNotRegistered && <input type="password" placeholder="Confirm Password" />}
                <button type="submit" style={{backgroundColor: isMousedOver ? "black" : "white"}}onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{isNotRegistered ? "Register" : "Login"}</button>
            </form>

        </div>
    );
};

export default Form;