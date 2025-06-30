import { useRef } from "react";

export default function TestuseRef() {
    const inputRef = useRef();

    return (
        <>
            <h1>Test useRef Component</h1>
            <input
                type="text"
                ref={inputRef}
                placeholder="Type something..."
            />
            <button onClick={() => {
                if (inputRef.current) {
                    console.log(inputRef.current);
                }
            }}>
                Log Input Value
            </button>
        </>
    );
}