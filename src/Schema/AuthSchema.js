const { Schema, model } = require("mongoose");

const AuthSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const Authmodel = model("authdata", AuthSchema);
module.exports = Authmodel;
