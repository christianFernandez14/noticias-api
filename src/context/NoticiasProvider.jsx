import { useState, useEffect, createContext } from 'react'
import axios from "axios";

const NoticiasContext = createContext();


const NoticiasProvider = ({ children }) => {

  const [categoria, setCategoria] = useState('general')
  const [noticias, setNoticias] = useState([])
  const [pagina, setPagina] = useState(1)
  const [totalNoticias, setTotalNoticias] = useState(0)

  useEffect(() => {
    const consultarApi = async () => {      
      try {        
        const apiKey = import.meta.env.VITE_API_KEY
        const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${apiKey}`
  
        const { data } = await axios(URL)
        const {articles, totalResults} = data
  
        // console.log(data)
        setNoticias(articles)
        setTotalNoticias(totalResults)

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
        noticias,
        totalNoticias
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