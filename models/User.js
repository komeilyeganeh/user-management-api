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
    lowercase: true
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
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);
});

// ==== compare password mwthod ====
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
}

// ==== remove password when sending to frontend ====
userSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  return user;
}

module.exports = mongoose.model("User", userSchema);
