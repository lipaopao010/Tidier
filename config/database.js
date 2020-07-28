const mongoose = require("mongoose");

// Connect to the Mongo DB

function connectDb(){
    mongoose.connect(
        process.env.MONGODB_URI || "mongodb://localhost:27017/tidier",
        {
            useCreateIndex: true,
            useNewUrlParser: true,
        }
    );
}

module.exports = connectDb;