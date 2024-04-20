const usertable = require("../../Models/usertable.js");


const login = async (req, res) => {
  try {
    const {email} = req.body;
   const user = await usertable.find({email:email}).select('fingerprint_key email');
    if (!user[0].email) {
      return res.status(401).send({ message: "Invalid credentials" });
    } else {
        res
          .status(200)
          .send({
            status: "successfull",
            message: "Login successful",
            user
          });
      
    }
  } catch (errors) {
    res.status(500).send({ status: "failed", errors: errors.errors });
  }
};

module.exports = login;
