import React from 'react';
import HomePageStyles from '../styles/HomePageStyles';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <HomePageStyles>
      <SEO />
      <div className="title-outer-container">
        <div className="title-inner-container">
          <h1 className="title">Green Lake Investments</h1>
        </div>
      </div>
    </HomePageStyles>
  );
}
