import express from 'express';

const bookRouter = express.Router();

bookRouter.get('/', (req, res) => {
  res.send('hello world');
});

export default bookRouter;
