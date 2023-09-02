const mongoose = require('mongoose')

const githubProfileSchema = new mongoose.Schema({
  name: String, 
  imageURL: String, 
  status: String,
  username: String, 
  bio: String,
  followers: Number,
  following: Number,
  organisation: String,
  location: String, 
  websiteURL: String, 
  socialMediaHandle: String
})

const githubProfile = mongoose.model('github profile', githubProfileSchema)

module.exports = githubProfile;