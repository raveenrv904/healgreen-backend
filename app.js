require("dotenv").config();
require("express-async-errors");

// express
const express = require("express");
const app = express();

// middlewares
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleWare = require("./middleware/not-found");

// ConnectDB
const connectDB = require("./db/connect");

// Routes
const userRouter = require("./routes/UserRoute");

app.use(express.json());

app.use("/api/v1/users", userRouter);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, () => {
//       console.log(`Server is listening on port ${port}`);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// start();

module.exports = app;
