import Search from './SearchBar.styled'

const SearchBar = ({ onFormSubmit, setQuery, term, setTerm }) => {
  const onInputChange = (e) => {
    setQuery(e.target.value)
    setTerm(e.target.value)
  }

  return (
    <Search>
      <form action="submit" onSubmit={onFormSubmit}>
        <input
          type="text"
          value={term}
          onChange={onInputChange}
          placeholder="Enter keywords, e.g. forest..."
        />
        <button type="submit">Search</button>
      </form>
    </Search>
  )
}

export default SearchBar
