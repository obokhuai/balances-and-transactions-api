import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import { fetchAllTransactions } from './routes/fetchAllTransactions';
import { FetchLastestTransaction } from './routes/fetchLastestTransaction';
import { addTransactions } from './routes/addTransaction';
import { historicalBalances } from './routes/historicalBalances';
import { json } from 'body-parser';
import {  NotFoundError } from './errors/not-found-error'
import { errorHandler } from './middlewares/error-handler'



// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.get("/historical-balances", (req, res) => {
//   const historicalBalance = getHistoricalBalance();
//   return res.json(historicalBalance);
// });

const app = express();
// app.set('trust proxy', true);
app.use(json());
app.use(fetchAllTransactions);
app.use(FetchLastestTransaction);
app.use(addTransactions);
app.use(historicalBalances);

app.all('*', async (req, res) => {
    throw new NotFoundError();
  });

app.use(errorHandler);


export  { app };
