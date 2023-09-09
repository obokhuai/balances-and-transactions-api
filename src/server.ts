import mongoose from 'mongoose';
import {app} from "./app";

const start = async () => {

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDb');
  } catch (err) {
    console.error(err);
  }


  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');

  });
};

start();

// app.listen(process.env.PORT, () => {
//   console.log(`🚀 Server started on port ${process.env.PORT}!`);
//   console.log(
//     `📚 API docs are available on: http://localhost:${process.env.PORT}/api-docs`,
//   );
// });
