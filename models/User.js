const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide valid email",
      },
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    place: {
      type: String,
      required: [true, "Please provide an city"],
    },
    date: {
      type: String,
      required: [true, "Please provide a date"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
