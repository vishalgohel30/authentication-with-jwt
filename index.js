// import express from "express";
// const app = express();
// import { Connectdb } from "./Server/index.js";
// // import routes from "./Routes/Auth/index.js";

// const URL = "mongodb://localhost:27017"
// const PORT = 3000;

// Connectdb({URL});

// app.use(express.json());
// // app.use("/", routes);
// app.listen(PORT, () => {
//   console.log(`Example app listening at http://localhost:${PORT}`);
// });

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from 'cors';
import { connectDB } from "./Server/index.js";
import userRoutes from "./Routes/userRoutes.js";

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

// CORS Policy
app.use(cors())

// Database Connection
connectDB({ DATABASE_URL });

// JSON
app.use(express.json());

// Load Routes
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
