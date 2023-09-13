import mongoose from 'mongoose';

interface AccountAttrs {
    amount: number;
    currency: string;
    accountNumber: string;
    date: Date;
    status?: string;
}

interface AccountTransactionsAttr {
  transactions: AccountAttrs[];
}
interface AccountTransactionsAttrDoc extends mongoose.Document, AccountTransactionsAttr {}
const accountSchema = new mongoose.Schema<AccountAttrs>(
  {
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: String,
      required: false,
    },
    status: {
        type: String,
        required: false,
      },
      date:  {type: Date, required: true, default: Date.now},
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret._id;
        delete ret.__v;
        delete ret.accountNumber;
      },
    },
  },
);

interface AccountTransactionModel extends mongoose.Model<AccountTransactionsAttrDoc> {
    build(attrs: AccountTransactionsAttr): AccountTransactionsAttrDoc;
}

const AccountTransactionSchema = new mongoose.Schema<AccountTransactionsAttr>({
    transactions: [accountSchema]
},
{
    toJSON: {
      transform(doc, ret) {
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

AccountTransactionSchema.statics.build = (attrs: AccountTransactionsAttr) => {
    return new AccountTransaction(attrs);
  };

 const AccountTransaction = mongoose.model<AccountTransactionsAttr, AccountTransactionModel>('AccountTransaction', AccountTransactionSchema);
 export { AccountTransaction, AccountAttrs};
