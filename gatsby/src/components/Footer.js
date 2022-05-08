import React from 'react';
import FooterStyles from "../styles/FooterStyles";

export default function Footer() {
  return (
    <FooterStyles>
      <p className="center">
        &copy; Big Alpine Web Design {new Date().getFullYear()}
      </p>
    </FooterStyles>
  );
}
