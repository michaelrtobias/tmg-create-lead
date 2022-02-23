const createLeadDB = require("../db/leadsTable");
const sendMessage = require("../sqs/sendMessage");
function getCurrentDate() {
  const date = new Date();
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  const today = mm + "-" + dd + "-" + yyyy;
  return today;
}

module.exports = async function (body) {
  let params = {
    Item: {
      first_name: {
        S: body.first_name,
      },

      last_name: {
        S: body.last_name,
      },
      phone: {
        S: body.phone,
      },
      email: {
        S: body.email,
      },
      type: {
        S: body.type,
      },
      make: {
        S: body.make,
      },
      model: {
        S: body.model,
      },
      description: {
        S: body.description,
      },
      image_URL: {
        S: body.image_URL,
      },
      created_date: {
        S: getCurrentDate(),
      },
      timestamp: {
        S: new Date().toISOString(),
      },
    },
  };
  console.log("params", params);
  const result = await createLeadDB(params, "leads");
  console.log(result);
  const queueResults = await sendMessage(body);
  console.log("queue results:", queueResults);
  return result;
};
