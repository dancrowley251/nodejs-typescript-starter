import { Router } from 'express';
import { booksController } from './controllers/books.controller';

export let router = Router();

// get all books
router.get('/books', booksController.getAllBooks);

// create a new book
router.post('/books', booksController.createBook);

// get book by id
router.get('/books/:bookId', booksController.retrieveBook);

// update an existing book
router.put('/books/:bookId', booksController.updateBook);

// delete an existing book
router.delete('/books/:bookId', booksController.deleteBook);