const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  model: String,
  year: Number,
  maker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Maker'
  }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;

// Move all this to a new file called car functions -- 

async function addCarData() {
  const newCar = new Car({
    make: "Hyundai",
    model: "Verna",
    year: 2011
  });

  try {
    const savedCar = await newCar.save();
    console.log('Car data saved successfully: ', savedCar)
  } catch (error) {
    console.error("Error saving car data: ", error)
  }

}

const addAnotherCar = async () => {
  const newCar = new Car({
    make: "Subaru",
    model: "Legacy B4",
    year: 2000
  });

  try {
    const secondCar = await newCar.save();
    console.log('Car data saved: ', secondCar)
  } catch (error) {
    console.error("Error saving car data: ", error)
  }
}

const findAllCars = async () => {
  try {
    const allCars = await Car.find()
    console.log("All cars data: ", allCars)
  } catch (error) {
    console.log(error)
  }
}