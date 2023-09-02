const Maker = require('../models/maker')
const Car = require('../models/car')

async function addMakerData(makerData) {
  try{
    const maker = new Maker(makerData)
    const newMaker = await maker.save();
    console.log('New Maker create: ',newMaker)

    const carData = {
      model: 'Polo GT',
      year: 2012,
      maker: newMaker._id
    }

    const car = new Car(carData)
    const newCar = await car.save()

    console.log('New Car added: ', newCar)
  }
  catch(error){
    console.log(error)
  }
}

async function getCarWithMakerDetails(carId){
  try{
    const carWithMaker = await Car.findById(carId).populate('maker')
    console.log('car with ID found - ', carWithMaker)
  }
  catch(error){
    console.error(error)
  }
}
module.exports = {
  addMakerData, 
  getCarWithMakerDetails
}