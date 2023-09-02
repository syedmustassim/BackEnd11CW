const Movies = require('../models/movies')
const fs = require('fs')

// Reading JSON file -- 

const jsonData = fs.readFileSync('movies.json', 'utf8')
const moviesData = JSON.parse(jsonData)

// Seed data ---

async function seedDatabase() {
  try {
    for (const movieData of moviesData) {
      const newMovie = new Movies({
        title: movieData.title,
        releaseYear: movieData.releaseYear,
        genre: movieData.genre,
        director: movieData.director,
        actors: movieData.actors,
        language: movieData.language,
        country: movieData.country,
        rating: movieData.rating,
        plot: movieData.plot,
        awards: movieData.awards,
        posterUrl: movieData.posterUrl,
        trailerUrl: movieData.trailerUrl
      })

      await newMovie.save();
      console.log(`Movie: ${newMovie.title} seeded.`)
    }
    console.log('movie seeding complete')
  }
  catch (error) {
    console.log('error: ', error)
  }
}

// seedDatabase();

// Add a Movie - 

async function addMovie(){
  const newMovie = new Movies({
        title: "Inception",
        releaseYear: 2014,
        genre: ["action", "mystery"],
        director: "Christopher Nolan",
        actors: ["Leonardo DiCaprio", "Cillian Murphy"],
        language: "English",
        country: "USA",
        rating: 9.1,
        plot: "Time, dreams and a whole lot of stuff",
        awards: "Golden Globe",
        posterUrl: "https://www.imdb.com/title/tt1375666/mediaviewer/rm3426651392/?ref_=tt_ov_i",
        trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0"
  })
    try {
    const anotherMovie = await newMovie.save();
    console.log('Movie data saved: ', anotherMovie)
  } catch (error) {
    console.error("Error saving movie data: ", error)
  }
}

// addMovie();

// Read one movie

async function getMovieByTitle(movieTitle){
  try{
    const foundMovie = await Movies.findOne({title: movieTitle})
    if(foundMovie){
      console.log('Movie found: ', foundMovie)
    }
    else{
      console.log('Sorry movie does not exist')
    }
  }catch(error){
    console.log("Error", error)
  }
}

// getMovieByTitle("Jaws");

// Find all movies

const findAllMovies = async () => {
  try {
    const allMovies = await Movies.find()
    console.log("All movies data: ", allMovies)
  } catch (error) {
    console.log(error)
  }
}

// Read all movies for a given actor --

const findMovieByActor = async(actorName) => {
  try{
    const foundMovies = await Movies.find({actors: actorName})
    console.log(`Movies starring ${actorName} - `, foundMovies)
  }catch(error){
    console.log("Error:", error)
  }
}

// Read all movies for a given Director --

const findMovieByDirector = async(directorName) => {
  try{
    const foundMovies = await Movies.find({director: directorName})
    console.log(`Movies directed by ${directorName} - `, foundMovies)
  }
  catch(error){
    console.log("Error: ", error)
  }
}

// Read all movies for a given year -- 

const findMoviesByYear = async(year) => {
  try{
    const foundMovies = await Movies.find({releaseYear: year})
      console.log(`Movies released in the year ${year} - `, foundMovies)
    
  }catch(error){
    console.log(error)
  }
}

// Read all movies for a given genre -- 

const findMoviesByGenre = async(selectedGenre) => {
  try{
    const foundMovies = await Movies.find({genre: selectedGenre})
    console.log(`Movies of ${selectedGenre} genre - `, foundMovies)
  }catch(error){
    console.log(error)
  }
}

// Find by ID and Update -- 

const updateMovieById = async(movieId, data) => {
  try{
    const updatedMovie = await Movies.findByIdAndUpdate(movieId, data, {new: true})
    console.log('Updated movie by id is - ', updatedMovie)
  }
  catch(error){
    console.log(error)
  }
}

// Find by title and Update -- 

const updateMovieByTitle = async(movieTitle, data) => {
  try{
    const updatedMovie = await Movies.findOneAndUpdate(movieTitle, data, {new: true})
    console.log('Updated movie by Title is - ', updatedMovie)
  }
  catch(error){
    console.log(error)
  }
}

// Delete by ID ---

const deleteMovieById = async(movieId) => {
  try{
    const deletedMovie = await Movies.findByIdAndDelete(movieId, {runValidators: true})
    if(deletedMovie){
      console.log('Deleted movie is - ', deletedMovie)
    }
    else{
      console.log('No movie with this ID found')
    }
  }catch(error){
    console.log("Error is - ", error)
  }
}

// Sort movies by rating -- ascending - {rating: 1}, descending - {rating: -1}

const sortMovieByRating = async() => {
  try{
    const sortedMovies = await Movies.find().sort({rating: 1})
    console.log('Sorted movies rating - ', sortedMovies)
  }catch(error){
    console.log(error)
  }
}

// Add Review to Movie -- 

const addReview = async(movieId,userId, review) => {
  try{
    const movie = await Movies.findById(movieId)
    if(movie){
      const reviewData = {
        user: userId,
        text: review
      }
      movie.reviews.push(reviewData)
      await movie.save();

      const updatedMovie = await Movies.findById(movieId).populate('reviews.user', 'username profilePictureUrl')
      console.log('Updated Movie with Review - ', updatedMovie)
    }else{
      console.log('oops')
    }
  }
  catch(error){
    console.log(error)
  }
}

module.exports = {
  seedDatabase,
  addMovie,
  getMovieByTitle,
  findAllMovies,
  findMovieByActor,
  findMovieByDirector,
  findMoviesByYear,
  findMoviesByGenre,
  updateMovieById,
  updateMovieByTitle,
  deleteMovieById,
  sortMovieByRating,
  addReview
}