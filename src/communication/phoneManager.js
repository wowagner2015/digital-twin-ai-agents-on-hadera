const twilio = require('twilio');
const config = require('../../config/config');
const { logAction } = require('../hedera/topicManager');

const client = new twilio(config.twilio.accountSid, config.twilio.authToken);

async function makeCall(to, from, message, topicId) {
    client.calls.create({
        url: 'http://demo.twilio.com/docs/voice.xml',  // Replace with your call handling URL
        to: to,
        from: from
    })
    .then(call => logAction(topicId, `Call initiated to ${to} with message: ${message}`))
    .catch(err => console.error(err));
}

module.exports = makeCall;
