import React from 'react';

export const Child = React.memo(({ title }) => {
    console.log("Child component rendered")
    return (
        <div className="child">
            <h1>Child Component</h1>
            <h2>{title}</h2>
        </div>
    );

});

