// utils/connectToDB.ts
import mongoose from "mongoose";

type CustomGlobal = typeof globalThis & {
  mongooseCache: {
    conn: mongoose.Connection | null;
    promise: Promise<void> | null;
  };
};

let globalWithMongooseCache = global as CustomGlobal;

if (!globalWithMongooseCache.mongooseCache) {
  globalWithMongooseCache.mongooseCache = { conn: null, promise: null };
}

async function connectToDB() {
  if (globalWithMongooseCache.mongooseCache.conn) {
    return globalWithMongooseCache.mongooseCache.conn;
  }

  if (!globalWithMongooseCache.mongooseCache.promise) {
    globalWithMongooseCache.mongooseCache.promise = mongoose.connect(process.env.MONGO_URI || "")
      .then(() => {
        globalWithMongooseCache.mongooseCache.conn = mongoose.connection;
      })
      .catch(err => {
        console.error("Failed to connect to MongoDB", err);
        throw err;
      });
  }

  try {
    await globalWithMongooseCache.mongooseCache.promise;
    return globalWithMongooseCache.mongooseCache.conn;
  } catch (err) {
    console.error("Failed to establish a connection with MongoDB", err);
    throw err;
  }
}

export default connectToDB;
