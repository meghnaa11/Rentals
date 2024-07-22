import React, {useState} from "react";
import './Form.css';

const Form = () => {
    let isRegistered = false;

    let [isMousedOver, setMouse] = useState(false);

    function handleClick() {
        console.log("clicked");
    }

    function handleMouseOver() {
        isMousedOver = true;
    }

    function handleMouseOut() {
        isMousedOver = false;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="form" onSubmit={handleSubmit}>
            <form className="form">
                {isRegistered && <input type="text" placeholder="First Name" />}
                {isRegistered && <input type="text" placeholder="Last Name" />}
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                {isRegistered && <input type="password" placeholder="Confirm Password" />}
                <button type="submit" style={{backgroudColor: isMousedOver ? "black" : "white"}}onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{isRegistered ? "Login" : "Register"}</button>
            </form>

        </div>
    );
};

export default Form;