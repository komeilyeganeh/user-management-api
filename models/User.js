const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// ==== user schema ====
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  age: {
    type: Number,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});

// ==== password hash before saving user ====
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model("User", userSchema);
