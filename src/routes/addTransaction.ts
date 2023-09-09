import express, { Request, Response } from 'express';
import { AccountTransaction } from '../models/account';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validate-request';
import {  DatabaseConnectionError } from '../errors/database-connection-error'



const router = express.Router();

router.post('/api/add-transaction',
[
  body('amount').not().isEmpty().withMessage('Amount is required'),
  body('currency').not().isEmpty().withMessage('Please Enter the Currency ie EUR'),
  body('accountNumber').not().isEmpty().withMessage('Account Number is required')
],
validateRequest,
async (req: Request, res: Response) => {

  try {
    const transaction = await AccountTransaction.findOne();

    if (!transaction) {
        const newTransactions =  AccountTransaction.build({ transactions: [req.body] });
        await newTransactions.save();
        return res.status(201).send(newTransactions);
    }

    transaction.transactions.push(req.body);
    await transaction.save();
    res.status(201).send(transaction);
} catch (error) {
  throw new DatabaseConnectionError();
}
  }
);

export { router as addTransactions };