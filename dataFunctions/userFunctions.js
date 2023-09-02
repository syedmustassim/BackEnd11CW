const User = require('../models/user')

// Signup function for User

async function signup(userDetails) {
  try {
    const user = new User(userDetails);
    const newUser = await user.save();
    console.log("New User Created");
  }
  catch (error) {
    console.log("Error creating new User", error)
  }
}

// Login Functionality

async function login(email, password) {
  try {
    const user = await User.findOne({ email: email })
    if (user && user.password === password) {
      console.log("user Found");
    }
    else {
      throw new Error("Invalid Credentials");
    }
  }
  catch (error) {
    throw error;
  }
}

//Function to change Password

async function changePassword(email, password, newPassword) {
  try {
    const user = await User.findOne({ email });
    if (user && user.password === password) {
      user.password = newPassword;
      const updatedUser = await user.save();
      console.log("Password changed", updatedUser);
      // The below is not optimal way
      // const updatedUser = {...user,password:newPassword}
      // const newPassword = await User.findOneAndUpdate(email,updatedUser,{new:true});
    }
  }
  catch (error) {
    throw error;
  }
}

//Function to update pfp

async function updateProfilePicture(email, newProfilePictureUrl) {
  try {
    const user = await User.findOne({ email });

    if (user) {
      user.profilePictureUrl = newProfilePictureUrl;
      const updatedUser = await user.save();
      console.log("Profile Picture of updated user", updatedUser);
    }
    else {
      throw new error("User not found")
    }
  }
  catch (error) {
    throw error;
  }
}

//Function to update Contact Details

async function updateContactDetails(email, updatedContactDetails) {
  try {
    const user = await User.findOne({ email });
  }
  catch (error) {
    throw error
  }
}

module.exports = {
  signup,
  login,
  changePassword,
  updateProfilePicture,
  updateContactDetails
}