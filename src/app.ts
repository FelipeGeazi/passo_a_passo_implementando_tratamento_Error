import "express-async-console.error";
import express from "express";
import routes from "./routes";
import errorHandling from "./middleware/errorHandling.middleware";

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandling);

export default app;
