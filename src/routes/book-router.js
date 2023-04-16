import express from 'express';
import { getAllBook } from '../controller/bookController.js';

const bookRouter = express.Router();

bookRouter.get('/', getAllBook);

export default bookRouter;
