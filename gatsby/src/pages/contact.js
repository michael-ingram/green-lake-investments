import React from 'react';
import ContactPageStyles from '../styles/ContactPageStyles';
import SEO from "../components/SEO";

export default function ContactPage() {
    return (
        <ContactPageStyles>
            <SEO title="Contact Us"/>
            <div className="content-outer-container">
                <div className="content-inner-container">
                    <h1 className="content-title">Contact</h1>
                    <div className="scrollable-content">
                        <div className="page-content">
                            <p className="info-blurb">
                                For any questions about available properties, maintenance request
                                or other concerns please contact us at:
                            </p>
                            <h3 className="email">greenlakeinvest@gmail.com</h3>
                            <p className="phone-info-blurb">Or give us a call at:</p>
                            <h3 className="phone">(xxx) xxx-xxxx </h3>
                        </div>
                    </div>
                </div>
            </div>
        </ContactPageStyles>
    );
}
