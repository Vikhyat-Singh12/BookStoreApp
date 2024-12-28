import express from 'express';
import { getBook } from '../controller/book_controller.js';

const router = express.Router();

// Define the GET route for fetching books
router.get('/', getBook);

export default router;
