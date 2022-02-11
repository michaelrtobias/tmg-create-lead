const AWS = require("aws-sdk");
exports.handler = function ({ args: data }) {
  let results = data.contactInfo;
  try {
    console.log("results first name:", results.first_name);
    console.log("results product type:", results.type);
    console.log(5);
  } catch (e) {
    throw e;
  }
  return results;
};
