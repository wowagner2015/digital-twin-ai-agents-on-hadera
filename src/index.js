const { createTopic } = require('./hedera/topicManager');
const sendEmail = require('./communication/emailManager');
const makeCall = require('./communication/phoneManager');
const sendMessage = require('./communication/messageManager');

async function main() {
    const topicId = await createTopic();

    // Example: Send an email
    await sendEmail('recipient@example.com', 'Test Subject', 'This is a test email.', topicId);

    // Example: Make a phone call
    await makeCall('+1234567890', 'YOUR_TWILIO_PHONE_NUMBER', 'This is a test call.', topicId);

    // Example: Send an SMS
    await sendMessage('+1234567890', 'YOUR_TWILIO_PHONE_NUMBER', 'This is a test message.', topicId);
}

main();
