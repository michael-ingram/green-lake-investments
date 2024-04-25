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
              Green Lake Investments is an Iowa based property management company.
              Founded in 2022, the owners bring extensive experience from property management, finance
              and insurance industries. Green Lake Investments is focused on providing a great long term rental
              experience to the Missouri and Iowa regions. Specifically, focusing on a small number of properties
              in the Lake of the Ozarks and Des Moines Regions, Green Lake Investments aims to provide a personal,
              family run business experience to its tenants. For more information, please contact us!
            </p>
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}
