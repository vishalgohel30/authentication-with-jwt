import mongoose from "mongoose";

export const connectDB = ({ DATABASE_URL }) => {
  const DB_OPTIONS = {
    dbName: process.env.DB,
  };
  mongoose
    .connect(DATABASE_URL, DB_OPTIONS)
    .then(() => {
      console.log("Connected successfully ..");
    })
    .catch((error) => {
      console.log(error);
    });
};
