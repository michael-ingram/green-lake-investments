import styled from 'styled-components';

const ContactPageStyles = styled.div`
    .page-content{
      text-align: center;
      @media(max-width: 1000px){
        font-size: 1.5rem;
      }
    }
  .email{
    @media (max-width: 500px){
      font-size: 1rem;
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
  .messageInfo {
    height: 200px;
    word-break: break-word;
  }
  .app-form {
    margin: 15px;
  }
`;

export default ContactPageStyles;