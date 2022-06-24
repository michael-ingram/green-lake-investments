const nodemailer = require('nodemailer');

function generateMessageEmail({ name, email, messageInfo}) {
    return `<div>
    <h2>New Message from ${name}<h2>
    <p>${name} sent this message from the green lake investment website:</p>
    <p>${messageInfo}</p>
    <p>They can be contacted at ${email}</p>
    <style>
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
        'messageInfo'
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
        subject: 'New Message from Website',
        html: generateMessageEmail({
            name: body.name,
            email: body.email,
            messageInfo: body.messageInfo,
        }),
    });
    return {
        statusCode: 200,
        body: JSON.stringify(info),
    };
};
