import mongoose from "mongoose";
import { configDotenv } from "dotenv";

export default async function connectDB() {
  configDotenv();

  try {
    await mongoose.connect(
      `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_COLLECTION}`
    );
    console.log("Connected with DB successfully");
  } catch (error: any) {
    console.error(`Can't connect with the DB, Error: ${error.message}`);
    console.log(`Quitting API`);
    process.exit(1);
  }
}
