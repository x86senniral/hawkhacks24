import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "uri",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

