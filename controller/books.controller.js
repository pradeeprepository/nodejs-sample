var BOOKMODEL = require('../models/books.models');
var BOOKNOTIF = require('../models/book-notification.model');

var mongoose = require('mongoose');
// GET: books list
exports.getBooksList = (req, res, next) => {
  BOOKMODEL.find()
    .exec()
    .then(result => {
      return res.status(200).json({
        status: 200,
        response: result
      });
    })
    .catch(error => {
      if (error) {
        return res.status(500).json({
          status: 500,
          response: error
        });
      }
    });
  //  res.status(200).json('List of books');
};
// POST: Create book records
exports.createBookList = (req, res, next) => {
  const bookObj = new BOOKMODEL({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    author: req.body.author,
    description: req.body.description,
    category: req.body.category
  });
  bookObj
    .save()
    .then(result => {
      console.log(result);
      return res.status(200).json({
        status: 200,
        response: 'Created successfully!'
      });
    })
    .catch(error => {
      return res.status(500).json({
        status: 500,
        response: error
      });
    });
};

// POST: Update records
exports.updateBookList = (req, res, next) => {
  const newObj = new BOOKMODEL({
    name: req.body.name,
    author: req.body.author,
    description: req.body.description,
    category: req.body.category
  });
  BOOKMODEL.findByIdAndUpdate(req.body._id, newObj, { new: true })
    .then(result => {
      console.log(result);
      return res.status(200).json({
        status: 200,
        response: 'Updated successfully!'
      });
    })
    .catch(error => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          status: 500,
          response: error
        });
      }
    });
};
// Delete: Delete records
exports.deleteBookList = (req, res, next) => {
  BOOKMODEL.findByIdAndRemove({ _id: req.body._id })
    .then(result => {
      console.log(result);
      return res.status(200).json({
        status: 200,
        response: 'Deleted successfully!'
      });
    })
    .catch(error => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          status: 500,
          response: error
        });
      }
    });
};

// GET: Book Notifications
exports.bookNotification = (req, res, next) => {
  console.log('hei');
  BOOKNOTIF.find()
    .exec()
    .then(result => {
      if (result) {
        return res.status(200).json({
          status: 200,
          response: result
        });
      }
    })
    .catch(error => {
      if (error) {
        return res.status(500).json({
          status: 500,
          response: error
        });
      }
    });
};
// POST: creat createbookNotification with Static data insertion
exports.createbookNotification = (req, res, next) => {
  const instance = new BOOKNOTIF({
    _id: new mongoose.Types.ObjectId(),
    dashboardTitle: 'Book Store',
    notificationCount: '3',
    notificationModule: [
      {
        category: 'Movie',
        message: 'F&F 7'
      },
      {
        category: 'Epic',
        message: 'The Rich and Poor dad'
      },
      {
        category: 'Comic',
        message: 'Tom and Jerry'
      }
    ]
  });
  instance
    .save()
    .then(result => {
      console.log(result);
      return res.status(200).json({
        status: 200,
        response: 'Created successfully!'
      });
    })
    .catch(error => {
      return res.status(500).json({
        status: 500,
        response: error
      });
    });
};
