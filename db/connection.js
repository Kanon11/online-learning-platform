let mongoose = require("mongoose");
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        throw new Error("Could not Connect To MongoDB");
    }
}

async function disconnectFromDatabase() {
    try {
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("Could not Disconnect From MongoDB");
    }
}

module.exports= { connectToDatabase, disconnectFromDatabase };