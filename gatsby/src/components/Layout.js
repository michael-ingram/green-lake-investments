import React from 'react';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
        <Nav />
      {children}
      <Footer />
    </>
  );
}
