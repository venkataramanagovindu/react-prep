import React, { ReactNode, useState } from "react"
import { LoaderContext } from "./LoaderContext"

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [loaderText, setLoaderText] = useState('')
  
    const start = (loaderText = 'Loader...') => {
      console.log("Loader started with text:", loaderText);
      setLoaderText(loaderText)
      setIsLoading(true)
    }
  
    const stop = () => setIsLoading(false)
  
    return (
      <LoaderContext.Provider value={{ isLoading, start, stop, loaderText }}>
        {children}
      </LoaderContext.Provider>
    )
  }
