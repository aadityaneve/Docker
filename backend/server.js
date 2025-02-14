const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectMongoDB = require("./config/mongo-db");
const authRoutes = require("./routes/auth-routes");

dotenv.config();
connectMongoDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
