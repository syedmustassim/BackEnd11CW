const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  regNo: String,
  studentId: Number,
  studentName: String,
  fatherOrGuardianName: String,
  class: String,
  emergencyContact: Number
})

const student = mongoose.model('student', studentSchema)

module.exports = student;

// move this to a new file called student Functions

async function addStudentData() {
  const newStudent = new Student({
    regNo: "b1234k",
    studentId: 123456,
    studentName: "Joe",
    fatherOrGuardianName: "Hachi",
    class: "8A",
    emergencyContact: 785390221
  })

  try {
    const savedStudent = await newStudent.save()
    console.log("New Student: ", savedStudent)
  } catch (error) {
    console.log(error)
  }
}