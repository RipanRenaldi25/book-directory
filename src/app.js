import express from 'express';
import mongoose from 'mongoose';

import bookRouter from './routes/book-router.js';

const main = async () => {
  const uri = 'mongodb://127.0.0.1:27017/bookDirectory';

  const app = express();
  const port = process.env.PORT || 3000;
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use('/books', bookRouter);

  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (e) {
    console.log(e.message);
  }
  app.listen(port, () => console.log('server running on port 3000'));
  return app;
};
export default main;
