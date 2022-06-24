import React from 'react';
import { graphql, Link } from 'gatsby';
import ResidentPageStyles from '../styles/ResidentPageStyles';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';
import useInfo from '../utils/useInfo';
import Success from "../components/Sucess";

export default function ResidentsPage({ data }) {
  const forms = data.forms.nodes;
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    phoneNumber: 'xxx-xxx-xxxx',
    property: '',
    maintenanceReq: '',
  });
  const { error, loading, message, submitRequest } = useInfo({ values });
  if (message) {
    return <Success title="Current & Future Residents" />;
  }
  return (
    <ResidentPageStyles onSubmit={submitRequest}>
      <SEO title="Residents" />
      <div className="content-outer-container">
        <div className="content-inner-container">
          <h1 className="content-title">Current & Future Residents</h1>
          <div className="scrollable-content">
            <h2>Future Residents</h2>
            <h5 className="app-form">Application Form:</h5>
            <button>
              <a href={`${forms[0].file.asset.url}`}>Download</a>
            </button>
            <h2>Current Residents</h2>
            <h5 className="maintenance-req">
              Submit A Maintenance Request Below:
            </h5>
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
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  value={values.phoneNumber}
                  onChange={updateValue}
                />
                <br />
                <label htmlFor="property">Property Address: </label>
                <input
                  type="text"
                  name="property"
                  value={values.property}
                  onChange={updateValue}
                />
                <br />
                <label htmlFor="maintenanceReq">Describe your Issue:</label>
                <textarea
                  className="maintenance-input"
                  name="maintenanceReq"
                  value={values.maintenanceReq}
                  onChange={updateValue}
                />
                <br />
                <div aria-live="polite" aria-atomic="true">
                  {error ? <p>Error: {error}</p> : ''}
                </div>
                <button type="submit" disabled={loading}>
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
    </ResidentPageStyles>
  );
}

export const query = graphql`
  query FormQuery {
    forms: allSanityForms {
      nodes {
        description
        id
        file {
          asset {
            url
          }
        }
      }
    }
  }
`;
