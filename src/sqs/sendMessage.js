const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const dotenv = require("dotenv").config();

module.exports = async (body) => {
  const sqs = new AWS.SQS();
  let params = {
    MessageBody: JSON.stringify(body),
    QueueUrl: process.env.QUEUEURL,
  };
  const results = await sqs.sendMessage(params).promise();
  console.log("sqs send message push results:", results);
  return results;
};
