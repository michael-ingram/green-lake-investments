import React from "react";
import SEO from "./SEO";
import styled from "styled-components";

const SuccessStyles = styled.div`
  h1 {
    text-align: center;
  }
`;

export default function Success({ title }) {
    return (
        <SuccessStyles>
            <SEO title="Success" />
            <div className="content-outer-container">
                <div className="content-inner-container">
                    <h1 className="content-title">{title}</h1>
                    <div className="scrollable-content">
                        <h1>Success! Message Sent</h1>
                    </div>
                </div>
            </div>
        </SuccessStyles>
    );
}