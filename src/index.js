const AWS = require("aws-sdk");
exports.handler = function (event) {
  try {
    console.log("The gateway is working");
    console.log(23);
    console.log("event", event);
  } catch (e) {
    throw e;
  }
  return "96";
};
