import React from "react";
import { Panel } from "./Panel";
import { LoginButton } from "./LoginButton";

const Form: React.FC = () => {
    console.log("Form component rendered");
    return (
        <div>
            <h2>Form Component</h2>
            <Panel title="Welcome">
                <LoginButton />
            </Panel>
            {/* Form implementation goes here */}
        </div>
    );
};

export default Form;
