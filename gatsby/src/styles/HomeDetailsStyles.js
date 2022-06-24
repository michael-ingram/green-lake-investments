import styled from 'styled-components';

const HomeDetailsStyles = styled.div`
      .greyed-out-bg {
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: black;
        opacity: 0.5;
        z-index: 99;
      }
    .modal{
      background-color: var(--offwhite);
      border-radius: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 85%;
      height: 80%;
      margin: 0;
      padding: 20px;
      max-height: 80%;
      z-index: 999;
      opacity: 1;
    }
  .modal-title {
    background-color: var(--olivegreen);
    color: white;
    width: 100%;
    text-align: center;
    font-size: 4rem;
    border-radius: 20px;
    margin: 5px 0 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .modal-content {
    background-color: var(--offwhite);
    margin: 0 auto;
    border-radius: 20px;
    max-height: 100%;
    width: 100%;
    text-align: center;
  }
  .scrollable {
    height: 50vh;
    @media(max-width: 600px){
      height: 35vh;
    }
    overflow-y: scroll;
  }
  .image-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    @media(max-width: 600px){
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
    }
  }
  .images {
    width: 200px;
    height: 200px;
    @media(max-width: 600px){
      width: 150px;
      height: 150px;
    }
    border-radius: 10px;
  }
  .home-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .cancel-container {
    text-align: right;
  }
  .cancel-circle {
    color: var(--olivegreen);
    font-size: 3rem;
  }
`;

export default HomeDetailsStyles;