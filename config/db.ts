import mongoose from 'mongoose';

const MONGO_URI ='mongodb+srv://test:test@ehimikaone.pzozdao.mongodb.net/Eric?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
      await mongoose.connect(MONGO_URI);
      console.log('Connected to MongoDb');
    } catch (err) {
      console.error(err);
    };
    };

    export default connectDB;