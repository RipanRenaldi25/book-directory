import express from 'express';
import mongoose from 'mongoose';

const main = async () => {
  const uri = 'mongodb://127.0.0.1:27017/bookDirectory';

  const app = express();
  const port = process.env.PORT || 3000;

  app.get('/', (req, res) => {
    res.send('hello world');
  });

  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (e) {
    console.log(e.message);
  }
  app.listen(port, () => console.log('server running on port 3000'));
};
export default main;
