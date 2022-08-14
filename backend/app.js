import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

// For getting the environment variables from .env file
dotenv.config();

/* Import all the routers and the middlewares */
import { router1, router2 } from "./routes";
import { middleware1, middleware2 } from "./middlewares";

const app = express();

/* Here you put all the middlewares. for example:*/
app.use(cors());
app.use(json());
app.use(middleware1);
app.use(middleware2);

/* Here you put all the routers */
app.use("/api/route1", router1);
app.use("/api/route2", router2);

/* Start the server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on port " + PORT));
