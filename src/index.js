const AWS = require("aws-sdk");
exports.handler = function ({ args: data }) {
  try {
    console.log("The gateway is working");
    console.log(23);
  } catch (e) {
    throw e;
  }
  return "96";
};
