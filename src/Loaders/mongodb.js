const mongoose = require("mongoose");

async function startdb(){
    await mongoose.connect(process.env.MONGO_URI);
    console.log("banco de dados iniciado!")
}
module.exports = startdb;