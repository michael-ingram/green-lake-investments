import styled from 'styled-components';

const ResidentPageStyles = styled.div`
  text-align: center;
  .contact-us {
    text-decoration: none;
    margin: 5px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: black;
  }
  h2 {
    text-decoration: underline;
    @media(max-width: 1000px){
      font-size: 2rem;
    }
  }
  fieldset {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 5px;
  }
  input {
    text-align: center;
  }
  .maintenance-input {
    height: 200px;
    word-break: break-word;
  }
  .app-form {
    margin: 15px;
  }
`;

export default ResidentPageStyles;