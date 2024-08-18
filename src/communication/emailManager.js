const nodemailer = require('nodemailer');
const config = require('../../config/config');
const { logAction } = require('../hedera/topicManager');

async function sendEmail(to, subject, body, topicId) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.email.user,
            pass: config.email.pass
        }
    });

    let mailOptions = {
        from: config.email.user,
        to: to,
        subject: subject,
        text: body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            logAction(topicId, `Email sent to ${to} with subject: ${subject}`);
        }
    });
}

module.exports = sendEmail;
