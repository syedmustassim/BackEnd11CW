const mongoose = require('mongoose');

const youtubeThumbnailSchema = new mongoose.Schema({
  title: String,
  channelName: String,
  channelImg: String,
  videoURL: String,
  videoDuration: Number,
  viewCount: Number,
  thumbnailURL: String,
  uploadTime: String
})

const youtubeThumbnail = mongoose.model('Thumbnail', youtubeThumbnailSchema)

module.exports = youtubeThumbnail;