import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 3;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  h3,
  h4 {
    font-weight: 400;
  }
  h3 {
    text-transform: capitalize;
    margin-bottom: 0.25rem;
  }
  h4 {
    margin-bottom: 0.5rem;
    a {
      color: #0070d2;
      &:hover {
        color: white;
      }
    }
  }
  p.description {
    font-size: 0.85rem;
    font-weight: 500;
  }
  .imageInfoListItemBottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    p {
      font-size: 0.85rem;
    }
    a {
      padding: 1rem;
      font-size: 0.85rem;
      background: #1baee5;
      color: white;
      border-radius: 25px;
      transition: 0.2s;
      &:hover {
        background: #0070d2;
      }
    }
    @media (max-width: 600px) {
      margin-top: 1rem;
    }
  }
`

export default Wrapper
