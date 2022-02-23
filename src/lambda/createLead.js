const AWS = require("aws-sdk");
const db = require('../db/leadsTable')

getCurrentDate() {
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
  console.log("create body:", body);
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
      }
    }
  };
  console.log('params:', params)
  try {
    // const result = await db.create(params, "leads");
    // console.log(result);
    console.log("params", params);
    return result;
  } catch (e) {
    if (e.expected) {
      console.log(e.message)
      throw e;
    } else {
      // throw new Error('Intergalactic Space Ranger')
      throw e
    }
  }
};
