import React from 'react';
import HomePageStyles from '../styles/HomePageStyles';
import SEO from '../components/SEO';
import logo from '../assets/images/logo.svg';

export default function HomePage() {
  return (
    <HomePageStyles>
      <SEO title="Home" />
      <img className="logo" src={logo} alt="logo" />
    </HomePageStyles>
  );
}
