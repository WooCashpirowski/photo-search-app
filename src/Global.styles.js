import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    font-size: 1.15em;
  }

  h1 {
    padding: 5rem;
    background: darkslategrey;
    color: white;
    text-align: center;
    background: url('https://images.unsplash.com/photo-1641038624074-25a1e8fabfc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    background-size: cover;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`

export default GlobalStyles
