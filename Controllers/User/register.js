const usertable = require("../../Models/usertable.js");
const register = async (req, res) => {
  try {
    // console.log("req body feild",req.body)
    const { first_name,last_name, email, mobile,fingerprint_key,fingerprint_img } = req.body;
    const createuser = new usertable({
      first_name,
      last_name,
      email,
      mobile,
      fingerprint_key,
      fingerprint_img
    });

    const response = await createuser.save();

    res.send({ status: "sucessful", data: response });
  } catch (errors) {
    res.send({ status: "faild", errors: errors });
    console.log('faild',errors)
  }
};

module.exports = register;
