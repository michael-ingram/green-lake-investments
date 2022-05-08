import React from 'react';
import { graphql } from 'gatsby';
import HomeList from '../components/HomeList';
import styled from "styled-components";
import SEO from "../components/SEO";

const AvailableHomeStyles = styled.div`
    .no-properties{
      text-align: center;
    }
`;

export default function AvailableHomesPage({ data }) {
    const homes = data.homes.nodes;
    const homeLength = data.homes.nodes.length;
    console.log(homeLength);
    return (
        <AvailableHomeStyles>
            <SEO title="Properties"/>
            <div className="content-outer-container">
                <div className="content-inner-container">
                    <h1 className="content-title">Properties</h1>
                    <div className="scrollable-content">
                        {homeLength > 0 && <HomeList homes={homes} />}
                        {homeLength === 0 &&
                            <h2 className="no-properties">Sorry, There are no properties currently available</h2>
                        }
                    </div>
                </div>
            </div>
        </AvailableHomeStyles>
    );
}

export const query = graphql`
    query HomeQuery {
        homes: allSanityHomes {
            nodes {
                id
                name
                rent
                beds
                baths
                squarefeet
                description
                slug {
                    current
                }
                mainImage {
                    asset {
                        fluid(maxWidth: 500, maxHeight: 500) {
                            ...GatsbySanityImageFluid
                        }
                    }
                    }
                }
        }
    }    
`;