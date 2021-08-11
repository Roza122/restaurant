import Mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await Mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database was connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectMongo;
