import express from 'express';
import { getAllBook, insertBook } from '../controller/bookController.js';

const bookRouter = express.Router();

bookRouter.get('/', getAllBook);
bookRouter.post('/', insertBook);

export default bookRouter;
