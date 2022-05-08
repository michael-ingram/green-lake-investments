import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const HomeListStyles = styled.div`
  display: grid;
  grid-template-rows: 600px;
  grid-auto-rows: 600px;
`;

const ListingStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .home-image {
    border-radius: 20px;
    margin: 20px;
  }
  .info-link {
    font-size: 1rem;
    text-align: center;
    margin: 5px;
    text-decoration: none;
  }
  .home-info {
    padding: 10px;
    text-align: center;
  }
  .description {
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 5px;
  }
  h2 {
    margin: 10px 0px;
  }
  h5 {
    margin: 20px 0px;
  }
  a {
    text-decoration: none;
    color: var(--olivegreen);
  }
`;

function SingleHome({ home }) {
    return (
        <ListingStyle>
            <Link to={`/property/${home.slug.current}`}>
                <Img className="home-image" fluid={home.mainImage.asset.fluid} alt={home.name} />
            </Link>
            <div className="home-info">
            <h2>{home.name}</h2>
            <h5>{home.beds} bed, {home.baths} bath</h5>
            <h5>Monthly Rent: ${home.rent}</h5>
            <p className="description">{home.description}</p>
                <Link to={`/property/${home.slug.current}`}>
                <button className="info-link">More Info</button>
                </Link>
            </div>
        </ListingStyle>
    )
}

export default function HomeList({ homes }) {
    return (
        <HomeListStyles>
            {homes.map((home) => (
                <SingleHome key={home.id} home={home}/>
            ))}
        </HomeListStyles>
    );
}