import express, { Request, Response } from 'express';
import { AccountTransaction } from '../models/account';


const router = express.Router();
router.get('/api/statement', async (req: Request, res: Response) => {

    const accountStatement = await AccountTransaction.findOne({});        
     res.send(accountStatement);
    

});

export { router as fetchAllTransactions };
