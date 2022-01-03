import React, { useState, createContext, useEffect } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const listState = localStorage.getItem('isList')
    ? JSON.parse(localStorage.getItem('isList'))
    : [false]
  const [isList, setIsList] = useState(listState)
  const setListView = (bool) => {
    setIsList(bool)
    return isList
  }
  useEffect(() => {
    localStorage.setItem('isList', JSON.stringify(isList))
  }, [isList])

  return (
    <AppContext.Provider value={{ isList, setListView }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
