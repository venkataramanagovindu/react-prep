import React, { useContext } from "react"
import { createContext, ReactNode, useState } from "react"

export type LoaderContextProps = {
    isLoading: boolean
    start: (loaderText: string) => void
    stop: () => void
    loaderText?: string
  }
  
export const LoaderContext = createContext<LoaderContextProps>({} as LoaderContextProps)

export const useLoader = () => {
  const loaderContext = useContext(LoaderContext)

  if (!loaderContext) {
    throw new Error('Please use useLoader inside the context of LoaderProvider')
  }

  return {
    start: loaderContext.start,
    stop: loaderContext.stop
  }
}
