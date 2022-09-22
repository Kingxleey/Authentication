const mongoose = require("mongoose");
const validator = require("validator");
const firstSchema = new mongoose.Schema ({
    fullName: {
        type: String,
       required: [true, "User must have a name"],
        trim: true,
      },
      phoneNumber: {
        type: String,
       required: [true, "User must have a phone-number"],
      },
      email: {
        type: String,
        required: [true, "A user must have an email"],
      validate: [validator.isEmail, "Please enter a valid email"],
        trim: true,
       lowerCase: true,
       unique: true,
      },
      password: {
        type: String,
        required: [true, "A user must have an email"],
        minLength: [50, "A password must be at least 8 characters"],
        select: false,
      },
   
})
module.exports = mongoose.model("First", firstSchema);
module.exports = First;