const usertable = require("../../Models/usertable.js");

const singleuser = async (req, res) => {
  try {

    const user = await usertable.findById(req.params.id);

    if (!user) {
      return res.status(401).send({ message: "Not Found" });
    } else {
        res.status(200).send({
            status: "successfull",
            data:user
          });
      
    }
  } catch (errors) {
    res.status(500).send({ status: "failed", errors: errors.errors });
  }
};

module.exports = singleuser;
