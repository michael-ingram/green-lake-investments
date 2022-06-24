import React from 'react';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import { FaTimesCircle } from 'react-icons/fa';
import HomeDetailsStyles from '../styles/HomeDetailsStyles';
import SEO from '../components/SEO';

export default function SinglePageHome({ data }) {
  console.log(data);
  return (
    <HomeDetailsStyles>
      <SEO title={data.home.name} />
      <div className="greyed-out-bg" />
      <div className="modal">
        <div className="cancel-container">
          <Link to="/availablehomes">
            <FaTimesCircle className="cancel-circle" />
          </Link>
        </div>
        <div className="modal-title">{data.home.name}</div>
        <div className="modal-content">
          <div className="scrollable">
          <div className="image-grid">
            {data.home.images.map((pic, index) => (
              <Img
                className="images"
                fluid={pic.asset.fluid}
                alt={`picture ${index}`}
                key={index}
              />
            ))}
          </div>
          <div className="home-details">
            <h5>Rent: ${data.home.rent}</h5>
            <h5>Square Feet: {data.home.squarefeet}</h5>
            <h5>Beds: {data.home.beds}</h5>
            <h5>Baths: {data.home.baths}</h5>
          </div>
        </div>
        </div>
      </div>
    </HomeDetailsStyles>
  );
}

export const query = graphql`
  query($slug: String!) {
    home: sanityHomes(slug: {current: {eq: $slug } }) {
      id
      description
      beds
      baths
      name
      rent
      squarefeet
      images {
        asset {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
