const mongoose = require("mongoose");

async function startdb(){
    await mongoose.connect('mongodb+srv://lucasakatsuka:Phg4XITBDIc7zI3f@traineebd.cd6hq.mongodb.net/?retryWrites=true&w=majority&appName=traineebd');
    console.log("banco de dados iniciado!")
}
module.exports = startdb;