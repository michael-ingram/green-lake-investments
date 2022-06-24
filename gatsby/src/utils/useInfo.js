import { useState } from 'react';

export default function useInfo({ values }) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function submitRequest(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // gather all the data
    const body = {
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
      property: values.property,
      maintenanceReq: values.maintenanceReq,
    };

    // 4. Send this data the serevrless function when they submit
    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/sendMaintenance`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );
    const text = JSON.parse(await res.text());

    // check if everything worked
    if (res.status >= 400 && res.status < 600) {
      setLoading(false); // turn off loading
      setError(text.message);
    } else {
      // it worked!
      setLoading(false);
      setMessage('Success! Maintenance Request Sent');
    }
  }
  return {
    error,
    loading,
    message,
    submitRequest,
  };
}
