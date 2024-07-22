import React from "react";
import Navbar from "../Navbar/Navbar";
import Form from "../Form/Form";


const Home = (props) => {
    return (
        <div>
            <Navbar />
            {props.register && <Form />}
        </div>
    );
};

export default Home;