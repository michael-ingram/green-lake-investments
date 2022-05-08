const nodemailer = require('nodemailer');

function generateOrderEmail({ name, email, property, phoneNumber, mainReq }) {
  return `<div>
    <h2>Maintenance Request from ${name} at ${property}<h2>
    <p>${name} is submitting a maintenance request about:</p>
    <p>${mainReq}</p>
    <p>They can be contacted at ${email} or by phone at ${phoneNumber}</p>
    <style>
      ul {
      list-style: none;
      }
    </style> 
  </div>`;
}

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);

  const requiredFields = [
    'name',
    'email',
    'phoneNumber',
    'property',
    'maintenanceReq',
  ];

  for (const field of requiredFields) {
    console.log(`Checking that ${field} is good`);
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! You are missing the ${field} field`,
        }),
      };
    }
  }

  const info = await transporter.sendMail({
    from: `${body.name} <${body.email}>`,
    to: 'greenlakeinvest@example.com',
    subject: 'New Maintenance Request',
    html: generateOrderEmail({
      name: body.name,
      email: body.email,
      property: body.property,
      phoneNumber: body.phoneNumber,
      mainReq: body.maintenanceReq,
    }),
  });
  console.log(info);
  return {
    statusCode: 200,
    body: JSON.stringify(info),
  };
};
