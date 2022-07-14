import mongoose from "mongoose";

const uri = process.env.mongouri;

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null
  }
}

async function connect() {
  if (cached.conn) return cache.conn;

  if (cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(mongouri, opts).then((mongoose) => {
      return mongoose
    })
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connect;