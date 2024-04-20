
const usertable = require("../../Models/usertable.js");
const updateuser = async (req, res) => { 
try{
    const updateduser = await usertable.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updateduser) {
      return res.status(404).json({ status: "failed", message: "User not found" });
    }
    res.send({ status: "successfully update", data: updateduser });

}catch(err){
    res.send({status:"faild",errors:err})

}


}

module.exports = updateuser