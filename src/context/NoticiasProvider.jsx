import { useState, useEffect, createContext } from 'react'
import axios from "axios";

const NoticiasContext = createContext();


const NoticiasProvider = ({ children }) => {

  const [categoria, setCategoria] = useState('general')
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const consultarApi = async () => {
      
      try {        
        const apiKey = import.meta.env.VITE_API_KEY
        const URL = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=${apiKey}`
  
        const { data } = await axios(URL)
  
        // console.log(data.articles)
        setNoticias(data.articles)

      } catch (error) {
        console.log(error)
      }


    }
    consultarApi()

  }, [categoria])

  const handleChangeCategoria = e => {
    setCategoria(e.target.value)
  }

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias
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