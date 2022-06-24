import React from 'react';
import AboutPageStyles from '../styles/AboutPageStyles';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <AboutPageStyles>
      <SEO title="About" />
      <div className="content-outer-container">
        <div className="content-inner-container">
          <h1 className="content-title">About Us</h1>
          <div className="scrollable-content">
            <p className="about-info">
              Green Lake Investments is an Iowa based property management
              company. Founded in 2022 and Co-Owned by Chris Ingram and Margaret Ingram.
              Chris Ingram brings 30 years of experience in management and insurance. Margaret Ingram
              is a Certified Public Account with 30 years of experience in accounting and finances. Together
              they run Green Lake Investments which provides property rentals in the Des Moines, Iowa and
              Lake Ozark, Missouri regions.
            </p>
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}
