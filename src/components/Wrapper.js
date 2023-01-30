import styled from 'styled-components';
import bg from '../assets/images/bg.jpg';

export default styled.div`
  height: auto;
  min-height: 100vh;
  width: 100%;
  color: white;
  padding-top: 10px;
  padding-bottom: 20px;

  background-color: black;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    height: 100px;
    margin-bottom: 10px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 22px;
    width: 70%;
    height: 75%;

    p {
      margin-bottom: 20px;
    }
  }

  > div > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 600px) {
    min-height: 100vh;
    height: auto;
    max-height: initial;
    min-width: 100%;
    max-width: initial;
  }
`;
