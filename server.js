import app from "./app.js";
import mongoose from "mongoose";

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });


  // mongodb+srv://Yuliia:9V9k0sksgd3wKN5R@cluster0.b2hfpai.mongodb.net/db-contacts?retryWrites=true&w=majority