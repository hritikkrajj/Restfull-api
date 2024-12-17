const mongoose = require('mongoose');

// Database URI
const dbURI = process.env.MONGO_URI || "mongodb://localhost:27017/olympics";

// Connect to MongoDB
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection to MongoDB successful");
}).catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message);
});