const express= require("express");
const cors= require("cors");
require("dotenv").config();

const connectDB= require("./config/db");
const busRoutes= require("./routes/busRoutes");
const userRoutes= require("./routes/userRoutes");
const bookingRoutes= require("./routes/bookingRoutes");
const app = express();

app.use(cors());
app.use(express.json());

connectDB();
console.log(process.env.JWT_SECRET);
app.use("/bus", busRoutes);
app.use("/user", userRoutes);
app.use("/booking",bookingRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});