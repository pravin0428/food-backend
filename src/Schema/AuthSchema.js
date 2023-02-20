const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name : {type : String , require : true},
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: { type: String, required: true },
  }
);
const UserModel = mongoose.model("authdata", UserSchema);
module.exports = UserModel;

