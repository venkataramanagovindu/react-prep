import React from 'react';
import {LoginButton} from './LoginButton';

export const Panel: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    console.log("Panel component rendered");
    return (
        <div>
            <h2>{title}</h2>
            {children}
            {/* Panel implementation goes here */}
        </div>
    );
};