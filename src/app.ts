import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import { fetchAllTransactions } from "./routes/fetchAllTransactions";
import { FetchLastestTransaction } from "./routes/fetchLastestTransaction";
import { addTransactions } from "./routes/addTransaction";
import { historicalBalances } from "./routes/historicalBalances";
import { json } from "body-parser";
import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";

const app = express();

app.use(json());
app.use(fetchAllTransactions);
app.use(FetchLastestTransaction);
app.use(addTransactions);
app.use(historicalBalances);

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
