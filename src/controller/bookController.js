import booksSchema from '../schema/books.js';
import { checkInputValid } from '../utils/utils.js';

export const getAllBook = async (req, res) => {
  try {
    const allBooks = await booksSchema.find();
    if (!allBooks.length) {
      throw new Error('There is no Books to Find, please add book first');
    }
    res.status(200).json({ allBooks });
  } catch (error) {
    console.error(`Error in getAllBook Controller: ${error.message}`);
    res.status(404).send('Failed to Retrive all books. Please try again later');
  }
};

export const insertBook = async (req, res) => {
  try {
    const {
      id, title, author, publishedYear, publisher, genres,
    } = req.body;
    const isInputValid = checkInputValid([id, title, author, publishedYear, publisher, genres]);
    if (!isInputValid) {
      throw new Error(isInputValid);
    }
  } catch (err) {

  }
};
