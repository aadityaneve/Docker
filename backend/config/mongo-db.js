const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    console.log(
      "🚀 ~ connectMongoDB ~ process.env.MONGO_URI:",
      process.env.MONGO_URI
    );
    // await mongoose.connect(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
  } catch (error) {
    console.log("🚀 ~ connectMongoDB ~ error:", error);
    console.error("MongoDB Connection Failed: ", error);
    process.exit(1);
  }
};

module.exports = connectMongoDB;
