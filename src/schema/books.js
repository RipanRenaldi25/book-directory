import { Schema, model } from 'mongoose';
import { v4 } from 'uuid';

const booksSchema = new Schema({
  _id: { type: String },
  title: { type: String },
  author: { type: String },
  publishedYear: { type: Number },
  publisher: { type: String },
  genres: { type: Array },
});

const BookModel = model('books', booksSchema);

export default BookModel;
