import React from "react";
import Form from "../Form/Form";


const Home = (props) => {
    return (
        <div>
            {props.register && <Form />}
        </div>
    );
};

export default Home;