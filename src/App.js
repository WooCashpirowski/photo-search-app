import './App.css'
import { useEffect, useState } from 'react'
import { createApi } from 'unsplash-js'
import {} from 'react-icons/fa'
import SearchBar from './components/SearchBar/SearchBar'
import Results from './components/Results/Results'
import GlobalStyles from './Global.styles'
import Loader from './components/Loader/Loader'

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY
  const [queryPhrase, setQueryPhrase] = useState('')
  const [term, setTerm] = useState('')
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  const [total, setTotal] = useState(0)
  const pages = 16

  const unsplash = createApi({
    accessKey: API_KEY,
  })

  function getPhotos(query, page = 1) {
    setLoading(true)
    return new Promise((resolve) => {
      unsplash.search
        .getPhotos({
          query,
          page,
          perPage: pages,
        })
        .then(({ response }) => {
          setLoading(false)
          resolve({ response })
        })
    })
  }

  const loadUnsplashPhotos = () => {
    getPhotos(queryPhrase, 1).then(({ response }) => {
      setPhotos(response.results)
      setTotal(response.total)
    })
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    loadUnsplashPhotos(queryPhrase)
    setTerm('')
  }

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight

    if (bottom) {
      getPhotos(queryPhrase, photos.length / pages + 1).then(({ response }) => {
        setPhotos([...photos, ...response.results])
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <>
      <GlobalStyles />
      <h1>Unsplash API Photo Seeker</h1>
      <SearchBar
        setQuery={setQueryPhrase}
        onFormSubmit={onFormSubmit}
        query={queryPhrase}
        term={term}
        setTerm={setTerm}
      />
      {photos.length > 0 && <Results total={total} photos={photos} />}
      {loading && <Loader />}
    </>
  )
}

export default App
