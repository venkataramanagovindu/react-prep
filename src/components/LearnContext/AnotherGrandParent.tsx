import React, { createContext, Suspense } from "react";
// import { Form } from "./Form";


const FormComponent = React.lazy(() =>
    new Promise<{ default: React.ComponentType<any> }>(resolve =>
      setTimeout(async () => {
        const mod = await import('./Form');
        // Wrap the module’s default export in { default: ... }
        resolve({ default: mod.default });
      }, 1000)
    )
  );


interface User{
    name: string;
    age: number;
}

interface UserContextType {
    currentUser: User | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType | null>(null);

export const AnotherGrandParent: React.FC = () => {
  console.log("AnotherGrandParent component rendered");

  const [currentUser, setCurrentUser] = React.useState<User | null>(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div style={{ border: "1px solid green", padding: "10px" }}>
        <h1>Another Grand Parent Component</h1>
        {/* This component can be used to provide context or additional functionality */}
        <Suspense fallback={<div>Loading Form...</div>}>
          <FormComponent />
        </Suspense>
        </div>
    </UserContext.Provider>

  );
}