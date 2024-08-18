const { TopicCreateTransaction, TopicMessageSubmitTransaction } = require("@hashgraph/sdk");
const createClient = require('./hederaClient');
const logger = require('../utils/logger');

const client = createClient();

async function createTopic() {
    const transaction = new TopicCreateTransaction().setTopicMemo("Digital Twin Activity Log");
    const response = await transaction.execute(client);
    const receipt = await response.getReceipt(client);
    const topicId = receipt.topicId;
    logger.log(`Created topic with ID: ${topicId}`);
    return topicId;
}

async function logAction(topicId, message) {
    const transaction = new TopicMessageSubmitTransaction({
        topicId,
        message: message
    });
    const response = await transaction.execute(client);
    const receipt = await response.getReceipt(client);
    logger.log(`Logged action: ${message}`);
}

module.exports = { createTopic, logAction };
