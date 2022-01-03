import styled from 'styled-components'

export default styled.div`
  width: 100%;
  form {
    display: flex;
    justify-content: center;
    padding: 3rem;
    max-width: 500px;
    margin: 2rem auto 0;
    position: relative;
    input {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding: 1rem;
      border-radius: 1.5rem;
      border: none;
      outline: none;
      transition: 0.3s;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      &:focus {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        &::placeholder {
          color: transparent;
        }
      }
    }
    button {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 120px;
      padding: 1rem;
      border-radius: 0 1.5rem 1.5rem 0;
      border: none;
      outline: none;
      cursor: pointer;
      background: #1baee5;
      color: white;
      box-shadow: 2px 0 2px rgba(0, 0, 0, 0.5);
      transition: 0.2s;
      &:hover {
        background: #0070d2;
      }
    }
  }
`
