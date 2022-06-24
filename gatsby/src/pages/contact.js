import React from 'react';
import ContactPageStyles from '../styles/ContactPageStyles';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import useMessage from '../utils/useMessage';
import Success from "../components/Sucess";

export default function ContactPage() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    messageInfo: '',
  });
  const { error, loading, message, submitRequest } = useMessage({ values });
  if (message) {
    return <Success title="Contact" />;
  }
  return (
    <ContactPageStyles onSubmit={submitRequest}>
      <SEO title="Contact Us" />
      <div className="content-outer-container">
        <div className="content-inner-container">
          <h1 className="content-title">Contact</h1>
          <div className="scrollable-content">
            <div className="page-content">
              <p className="info-blurb">
                For any questions about available properties, maintenance
                request or other concerns please contact us at:
              </p>
              <h3 className="email">greenlakeinvest@gmail.com</h3>
              <p className="phone-info-blurb">Or send us a message below:</p>
              <form>
                <fieldset disabled={loading}>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={updateValue}
                  />
                  <br />
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={updateValue}
                  />
                  <br />
                  <label htmlFor="messageInfo">Message:</label>
                  <textarea
                    className="messageInfo"
                    name="messageInfo"
                    value={values.messageInfo}
                    onChange={updateValue}
                  />
                  <br />
                  <div aria-live="polite" aria-atomic="true">
                    {error ? <p>Error: {error}</p> : ''}
                  </div>
                  <button type="submit">
                    <span aria-live="assertive" aria-atomic="true">
                      {loading ? 'Sending...' : ''}
                    </span>
                    {loading ? '' : 'Submit'}
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ContactPageStyles>
  );
}
