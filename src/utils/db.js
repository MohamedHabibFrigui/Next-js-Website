import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (err) {
    throw Error("Connection failed!");
  }
};

export default connect;
