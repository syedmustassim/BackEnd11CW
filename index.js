require('./db');

const {  
  seedDatabase,
  addMovie,
  getMovieByTitle,
  findAllMovies, findMovieByActor, findMovieByDirector,       
  findMoviesByYear, 
  findMoviesByGenre,
  updateMovieById,
  updateMovieByTitle,
  deleteMovieById,
  sortMovieByRating,
  addReview
} = require('./dataFunctions/moviesFunction')

const {signup, login, changePassword, updateProfilePicture} = require ('./dataFunctions/userFunctions');

const {addMakerData, getCarWithMakerDetails} = require('./dataFunctions/makerAndCarFunctions')

addReview('64f2df9901909db24ab31ae6', '64f30e70898418a3f3819b61', 'One of the best movies in Bollywood')