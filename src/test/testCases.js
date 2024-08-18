const { createTopic, logAction } = require('../src/hedera/topicManager');
const sendEmail = require('../src/communication/emailManager');
const makeCall = require('../src/communication/phoneManager');
const sendMessage = require('../src/communication/messageManager');

async function runTests() {
    const topicId = await createTopic();

    console.log("Testing email sending...");
    await sendEmail('recipient@example.com', 'Test Subject', 'This is a test email.', topicId);

    console.log("Testing phone call...");
    await makeCall('+1234567890', 'YOUR_TWILIO_PHONE_NUMBER', 'This is a test call.', topicId);

    console.log("Testing SMS sending...");
    await sendMessage('+1234567890', 'YOUR_TWILIO_PHONE_NUMBER', 'This is a test message.', topicId);
}

runTests();
