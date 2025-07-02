import React, { createContext } from "react";
import { Parent } from "./Parent";

export const GrandParentContext = createContext("GrandParent Context Value");

export default function GrandParent() {
    console.log("GrandParent component rendered");
    const [grandParentValue, setGrandParentValue] = React.useState("GrandParent Context Value in state");
    return (
        <GrandParentContext.Provider value={grandParentValue}   >
            <div style={{ border: "2px solid black", padding: "10px" }}>
                <h1>GrandParent Component</h1>
                <Parent />
                <button onClick={() => setGrandParentValue("Updated GrandParent Context Value")}>
                    Update Context Value
                </button>
            </div>
        </GrandParentContext.Provider>
    );
}