import React, { useContext } from "react";
import { UserContext } from "./AnotherGrandParent";

export const LoginButton: React.FC = () => {

    console.log("LoginButton component rendered");
    const userContext = useContext(UserContext);

    if (!userContext) {
        return <p>Error: UserContext is not available.</p>;
    }

    const { currentUser, setCurrentUser } = userContext;

    if (currentUser) {
        return <p>You logged in as {currentUser.name}.</p>;
    }

    return (
        <button onClick={() => setCurrentUser({ name: "User", age: 30 })}>
            Login
        </button>
    );
};