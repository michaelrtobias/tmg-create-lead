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

const formatParams = (body) => {
  let params = {};
  const keys = Object.keys(body);
  keys.forEach((key) => {
    params[key] = {
      S: body[key],
    };
  });

  params = {
    ...params,
    created_date: {
      S: getCurrentDate(),
    },
    timestamp: {
      S: new Date().toISOString(),
    },
  };

  return params;
};

module.exports = async function (body) {
  let params = {
    Item: formatParams(body),
  };
  const result = await createLeadDB(params, "leads");

  const queueResults = await sendMessage(body);
  console.log("queue results:", queueResults);

  return { dbResult: result, queueResults: queueResults };
};
