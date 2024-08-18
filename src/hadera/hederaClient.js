const { Client, PrivateKey, AccountId } = require("@hashgraph/sdk");
const config = require('../../config/config');

function createClient() {
    const client = Client.forTestnet();
    client.setOperator(AccountId.fromString(config.hedera.accountId), PrivateKey.fromString(config.hedera.privateKey));
    return client;
}

module.exports = createClient;
