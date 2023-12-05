import { useState, useEffect, createContext } from 'react'
import axios from "axios";

const NoticiasContext = createContext();


const NoticiasProvider = ({ children }) => {

  return (
    <NoticiasContext.Provider
      value={{

      }}
    >
      {children}
    </NoticiasContext.Provider>

  )
}
export {
  NoticiasProvider
}
export default NoticiasContext