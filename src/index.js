const AWS = require("aws-sdk");
exports.handler = function (event) {
  try {
    console.log("event", event);

    let response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
      },
      body: JSON.stringify(response),
    };
    console.log("response:", response);
    return _response;
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e.message),
    };
  }
};
