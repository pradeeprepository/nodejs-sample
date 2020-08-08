const express = require('express');
const router = express.Router();
const booksController = require('../controller/books.controller');


//GET:list router
router.get("/getbooklist", booksController.getBooksList);
//Post: create books
router.post("/createbook", booksController.createBookList);
//Post: Update books
router.post("/updatebook", booksController.updateBookList);
//Post: Delete books
router.post("/deletebook", booksController.deleteBookList);
//GET: Books notificatoin
router.get("/booknotification", booksController.bookNotification);
//POST: Books notificatoin
router.post("/createbooknotification", booksController.createbookNotification);

module.exports = router;