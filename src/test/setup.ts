import mongoose from 'mongoose';


const MONGO_URI = 'mongodb+srv://test:test@ehimikaone.pzozdao.mongodb.net/Eric?retryWrites=true&w=majority';

beforeAll(async () => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  await mongoose.connect(MONGO_URI, {});
  
});

beforeEach(async () => {
  // const collections = await mongoose.connection.db.collections();

  // for (let collection of collections) {
  //   await collection.deleteMany({});
  // }
});

afterAll(async () => {
  await mongoose.connection.close();
});
