import { AccountTransaction } from '../models/account';
import connectDB from '../../config/db';
import {transactionData} from '../../config/dataResource';

connectDB();

const importData = async () => {
  try {  
    await AccountTransaction.deleteMany();
    const transaction = await AccountTransaction.findOne();
      if (!transaction && transactionData) {
        console.log(transactionData);
        const newTransactions =  AccountTransaction.build({ transactions: transactionData.transactions });
        await newTransactions.save();
    }
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await AccountTransaction.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

