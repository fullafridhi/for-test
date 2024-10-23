const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")
require("dotenv").config();
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes')
const dataConncet = require("./config/dataConnect");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/user', userRoutes);;
app.use('/api/admin', adminRoutes);


dataConncet();

// Port connection
const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server running on port ${port}`));
