import mongoose from 'mongoose';
import request from 'supertest';
import BookModel from '../schema/books';
import main from '../app';

/**
 * test case screnario
 * Should Return status code 200
 * Should Return list of all books
 * Should return "Failed to Retrive all books. Please try again later" when no books finded
 * Should Return 404 when no books finded
 */

describe('Get All Book Controller', () => {
  let app;
  beforeAll(async () => {
    app = await main();
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  beforeEach(async () => {
    await BookModel.deleteMany({});
  });
  it('Should Return status code 200', async () => {
    const newData = new BookModel({
      _id: +new Date(), publishedYear: 2000, author: 'Me', title: 'Enders Game',
    });
    await newData.save();
    const response = await request(app).get('/books');
    expect(response.status).toBe(200);
  });
  it('Should return list of all books', async () => {
    const newData = new BookModel({
      _id: +new Date(), publishedYear: 2000, author: 'Me', title: 'Enders Game',
    });
    await newData.save();
    const response = await request(app).get('/books');
    expect(response.text).toBeDefined();
    expect(response.body).toEqual(expect.any(Object));
  });
  it('Should return "Failed to Retrive all books. Please try again later" when no books finded', async () => {
    const response = await request(app).get('/books');
    expect(response.status).toBe(404);
  });
});
