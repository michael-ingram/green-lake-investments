import styled from 'styled-components';

const NavStyles = styled.nav`
  background-color: var(--olivegreen);
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    align-items: center;
  }
  li {
    order: 1;
    &:nth-child(1) {
    }
    &:nth-child(2) {
    }
    &:nth-child(4) {
    }
    &:hover {
    }
  }
  .active {
    color: var(--lightgreen);
  }
  a {
    color: var(--offwhite);
    font-size: 2.5rem;
    text-decoration: none;
    display: block;
    &:hover {
      color: var(--lightgreen);
    }
    @media (max-width: 800px) {
      font-size: 1rem;
    }
    /* &[aria-current='page'] {
      color: var(--red);
    } */
  }
  //@media (max-width: 600px) {
  //  --columns: 5;
  //  margin-bottom: 0.5rem;
  //  border-bottom: 2px solid var(--offwhite);
  //  padding-bottom: 0.5rem;
  //  ul {
  //    grid-template-rows: repeat(var(--columns), 1fr);
  //    justify-items: center;
  //  }
  //}
`;

export default NavStyles;
