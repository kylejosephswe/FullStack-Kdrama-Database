const mongoose = require("mongoose")

//Start server command:
//brew services start mongodb-community@6.0

//Stop server command:
//brew services stop mongodb-community@6.0

mongoose.connect("mongodb://127.0.0.1:27017/kdrama_database")
    .then(() => console.log("Database up and running!"))
    .catch((err) => console.log(err))