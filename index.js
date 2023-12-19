// app.js
const app = require("./app.js");
var dbModule = require("./db/connection.js");

const startServer = async () => {
    try {
        await dbModule.connectToDatabase();
        const PORT = process.env.PORT;
        app.listen(PORT, () => {
            console.log(`Server Open in ${PORT} & Connected To Database 🤟`);
        });
    } catch (err) {
        console.error(err);
    }
};

startServer();

module.exports = app;