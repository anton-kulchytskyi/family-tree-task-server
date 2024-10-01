import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectionString = process.env.MONGODB_URL as string;

const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
};

//db connection
const db = mongoose
  .connect(connectionString, options)
  .then((res) => {
    if (res) {
      console.log(`Database connection succeffully`);
    }
  })
  .catch((err) => {
    console.log(err);
  });

export default db;
