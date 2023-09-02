const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: String,
  releaseYear: Number,
  genre: [String],
  director: String,
  actors: [String],
  language: String,
  country: String,
  rating: Number,
  plot: String,
  awards: String,
  posterUrl: String,
  trailerUrl: String,
  reviews:[
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      text: String
    }
  ]
})

const movies = mongoose.model('Movies', movieSchema)

module.exports = movies;