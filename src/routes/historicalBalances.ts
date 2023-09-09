import express, { Request, Response } from 'express';
import { AccountTransaction } from '../models/account';
import {  DatabaseConnectionError } from '../errors/database-connection-error'

const router = express.Router();
router.get('/api/historical-balances', async (req: Request, res: Response) => {

try {
    const fromDate = new Date(req.query.from as string);
    const toDate = new Date(req.query.to as string);

    const aggregatedTransactions = await AccountTransaction.aggregate([
      { $unwind: "$transactions" },
      {
        $match: {
          "transactions.date": {
            $gte: fromDate,
            $lte: toDate
          }
        }
      },
      {
        $sort: {
          "transactions.date": req.query.sort === 'desc' ? -1 : 1
        }
      },
      {
        $project: {
          date: "$transactions.date",
          amount: "$transactions.amount",
          currency: "$transactions.currency",
          _id: 0
        }
      }
    ]);

    const formattedTransactions = aggregatedTransactions.map(transaction => ({
      date: `${transaction.date.getUTCDate().toString().padStart(2, '0')}/${(transaction.date.getUTCMonth() + 1).toString().padStart(2, '0')}/${transaction.date.getUTCFullYear()}`,
      amount: transaction.amount,
      currency: transaction.currency
    }));

    res.json(formattedTransactions);
  } catch (error) {
    throw new DatabaseConnectionError();
  }
});


export { router as historicalBalances };