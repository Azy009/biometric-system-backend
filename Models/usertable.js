const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true,"email is Required"],
      unique: [true,"already in database"],
    },
    mobile: {
      type: String,
      required: [true,"mobile is Required"],
      unique: [true,"already in database"],
    },
    status: {
      type: String,
      default:"Active"
    },
    fingerprint_img: {
      type: String,
      required: true,
    },
    fingerprint_key: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Usertable = mongoose.model("Usertable", userSchema);
module.exports = Usertable;
