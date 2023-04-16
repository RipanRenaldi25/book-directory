import { Schema, model } from 'mongoose';
import { v4 } from 'uuid';

const booksSchema = new Schema({
  id: { type: String, default: v4() },
  title: { type: String },
  author: { type: String },
  publishedYear: { type: String, default: +new Date() },
  publisher: { type: String },
  genres: { type: Array },
});

const bookModel = model('books', booksSchema);

export default bookModel;
