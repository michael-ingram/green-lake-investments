import React from 'react';
import AboutPageStyles from '../styles/AboutPageStyles';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <AboutPageStyles>
      <SEO title="About Us" />
      <div className="content-outer-container">
        <div className="content-inner-container">
          <h1 className="content-title">About Us</h1>
          <div className="scrollable-content">
            <p className="about-info">
              Green Lake Investments is an Iowa based property management
              company. Founded in 2022 and Co-Owned by Mr. Anonymous whose
              picture will not be shown and Margaret Ingram
            </p>
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}
