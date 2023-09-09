import express, { Request, Response } from 'express';
import { AccountTransaction } from '../models/account';
import {  NotFoundError } from '../errors/not-found-error'
import {  DatabaseConnectionError } from '../errors/database-connection-error'



const router = express.Router();
router.get('/api/lastest', async (req: Request, res: Response) => {
    try {
        const latestTransactions = await AccountTransaction.aggregate([
            { $unwind: "$transactions" },
            { $sort: { "transactions.date": -1 } },
            { $limit: 1 },
            { $replaceRoot: { newRoot: "$transactions" } }
        ]);

        if (latestTransactions.length === 0) {
            throw new NotFoundError();
        }
        res.json(latestTransactions[0]);
    } catch (error) {
        throw new DatabaseConnectionError();
    }
});

export { router as FetchLastestTransaction };