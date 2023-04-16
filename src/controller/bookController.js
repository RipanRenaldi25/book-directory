import booksSchema from '../schema/books.js';

export const getAllBook = async (req, res) => {
  try {
    const books = await booksSchema.find();
    if (!books.length) {
      throw new Error('There is no Books');
    }
    res.status(200).json({ books });
  } catch (e) {
    res.status(404).send(e.message).end();
  }
};

export const insertBook = async (payload) => {
  //
};
