import { v4 } from 'uuid';
import BookModel from '../schema/books.js';
import {
  checkInputHasValues, checkInputIsArray, trimStrings,
} from '../utils/utils.js';

export const getAllBook = async (req, res) => {
  try {
    const allBooks = await BookModel.find();
    if (!allBooks.length) {
      throw new Error('There is no Books to Find, please add book first');
    }
    res.status(200).json({ allBooks });
  } catch (err) {
    console.error(`Error in getAllBook Controller: ${err.message}`);
    res.status(404).send('Failed to Retrive all books. Please try again later');
  }
};

export const insertBook = async (req, res) => {
  const {
    id, title, author, publishedYear, publisher, genres,
  } = req.body;
  try {
    checkInputHasValues([title, author, publishedYear, publisher, genres]);
    const bookGenres = trimStrings(genres.split(','));
    const newBook = new BookModel({
      _id: id || v4(), title, author, publishedYear, publisher, genres: bookGenres,
    });
    await newBook.save();
    res.status(201).json({ message: 'Insert Book Success', book: newBook });
  } catch (err) {
    console.error(`Error in insertBook Controller: ${err.message}`);
    res.status(400).send(`Failed to Insert Book: ${err.message}`);
  }
};
