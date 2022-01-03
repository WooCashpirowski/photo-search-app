import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
  background: white;
`
export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-weight: 300;
  }
  .buttons {
    button {
      background: none;
      margin: 0.25rem;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      &.inactive {
        color: lightgray;
      }
    }
  }
`

export const ImagesWrapper = styled.div`
  display: grid;
  margin: 2rem auto;
  grid-template-columns: repeat(auto-fit, minmax(max(350px, 100%/5), 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1rem;
  .imageWrapper {
    position: relative;
    svg {
      color: #efc532;
      font-size: 1.5rem;
      margin: 1rem;
    }
    .image {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .imageInfoGridItem {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      .imageTitle {
        background: rgba(0, 100, 192, 0.7);
        color: white;
        padding: 1rem;
        font-weight: 300;
        text-transform: capitalize;
      }
      &.flexReverse {
        flex-direction: column;
      }
    }
  }
  &.list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .imageWrapper {
      height: 25vh;
      display: flex;
      width: 100%;
      background: linear-gradient(
        18deg,
        rgba(122, 200, 234, 1) 0%,
        rgba(54, 181, 228, 1) 50%,
        rgba(0, 100, 192, 1) 100%
      );
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
      color: white;
      .image {
        flex: 1;
        img {
          border-radius: 15px 0 0 15px;
        }
      }
      svg {
        position: absolute;
        top: 0;
        left: 0;
      }
      @media (max-width: 600px) {
        flex-direction: column;
        height: 100%;
        background: linear-gradient(
          90deg,
          rgba(122, 200, 234, 1) 0%,
          rgba(54, 181, 228, 1) 50%,
          rgba(0, 100, 192, 1) 100%
        );
        .image {
          img {
            border-radius: 15px 15px 0 0;
          }
        }
      }
    }
  }
`
