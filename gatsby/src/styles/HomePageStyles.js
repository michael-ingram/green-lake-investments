import styled from 'styled-components';

const HomePageStyles = styled.div`
  .title {
    text-align: center;
    color: var(--white);
    margin: 0;
    padding: 20px;
    font-size: 5rem;
    @media (max-width: 900px) {
      font-size: 3rem;
      padding: 10px;
    }
    @media( max-width: 500px){
      font-size: 2rem;
      padding: 10px;
    }
    @media( max-width: 300px){
      font-size: 1rem;
      padding: 5px;
    }
  }
  .title-outer-container {
    background-color: var(--black);
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    margin: 0;
    padding: 20px;
    @media (max-width: 900px){
      width: 65%;
    }
    @media( max-width: 500px){
      padding: 10px;
    }
  }
  .title-inner-container {
    background-color: var(--olivegreen);
    margin: 0 auto;
    border-radius: 20px;
    height: 100%;
    width: 100%;
  }
  .logo{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65vw;
    height: 65vh;
  }
`;

export default HomePageStyles;