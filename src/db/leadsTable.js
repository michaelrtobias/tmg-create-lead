const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

module.exports = async function create(params, tableName) {
  const ddb = new AWS.DynamoDB({
    apiVersion: "2012-08-10",
    region: "us-east-1",
  });
  console.log("params before reassignment:", params);
  params["TableName"] = tableName;
  console.log("params after reassignment:", params);

  const query = await ddb.putItem(params).promise();
  console.log("Lead Created");

  const unmarshalledQuery = AWS.DynamoDB.Converter.unmarshall(query);
  console.log("unmarshalledQuery:", unmarshalledQuery);
  return unmarshalledQuery;
};
