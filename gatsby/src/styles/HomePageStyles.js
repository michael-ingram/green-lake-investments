import styled from 'styled-components';

const HomePageStyles = styled.div`
  .title {
    text-align: center;
    color: var(--white);
    margin: 0;
    padding: 20px;
    font-size: 5rem;
  }
  .title-outer-container {
    background-color: var(--black);
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 50%;
    margin: 0;
    padding: 20px;
  }
  .title-inner-container {
    background-color: var(--olivegreen);
    margin: 0 auto;
    border-radius: 20px;
    height: 100%;
    width: 100%;
  }
`;

export default HomePageStyles;