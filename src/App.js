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

  const loadUnsplashPhotos = async (query, page = 1) => {
    setLoading(true)
    const res = await unsplash.search.getPhotos({
      query,
      page,
      perPage: pages,
    })
    if (res.status === 200) {
      setLoading(false)
      setPhotos(res.response.results)
      setTotal(res.response.total)
    }
  }

  const loadMorePhotos = async (query, page) => {
    setLoading(true)
    const res = await unsplash.search.getPhotos({
      query,
      page,
      perPage: pages,
    })
    if (res.status === 200) {
      setLoading(false)
      setPhotos([...photos, ...res.response.results])
      setTotal(res.response.total)
    }
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
      loadMorePhotos(queryPhrase, photos.length / pages + 1)
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
