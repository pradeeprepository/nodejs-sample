const express = require('express');
const router = express.Router();
const productsController = require('../controller/products-collection');

const multer = require('multer');
var PRODUCT_MODEL = require('../models/products.model');
var mongoose = require('mongoose');



//GET:list PRoducts
router.get("/products", productsController.getProductsList);
router.post("/updateproducts", productsController.updateProductList);
router.post("/deleteproducts", productsController.deleteProductList);
router.post("/createproductpage", productsController.createProductPage);
router.get("/productspagelist", productsController.productsPageList);
// //POST:list PRoducts
// router.get("/products", productsController.getProductsList);
// //GET:list PRoducts
// router.get("/products", productsController.getProductsList);
// //GET:list PRoducts
// router.get("/products", productsController.getProductsList);
//Post: create Products
// router.post("/createproducts", productsController.createProductList);
// //Post: create books
// router.post("/createbook", booksController.createBookList);
// //Post: Update books
// router.post("/updatebook", booksController.updateBookList);
// //Post: Delete books
// router.post("/deletebook", booksController.deleteBookList);
// //GET: Books notificatoin
// router.get("/booknotification", booksController.bookNotification);
// //POST: Books notificatoin
// router.post("/createbooknotification", booksController.createbookNotification);
// POST: file uploader
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images');
  },
  filename: (req, file, cb) => {
    // console.log(file);
    var filetype = '';
    if(file.mimetype === 'image/gif') {
      filetype = 'gif';
    }
    if(file.mimetype === 'image/png') {
      filetype = 'png';
    }
    if(file.mimetype === 'image/jpeg') {
      filetype = 'jpg';
    }
    cb(null, 'image-' + Date.now() + '.' + filetype);
  }
});
var upload = multer({storage: storage});
router.post('/createproducts', upload.single('image'), function (req, res, next) {
  const productObj = new PRODUCT_MODEL({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    offerPercentage: req.body.offerPercentage,
    type: req.body.type,
    size: req.body.size,
    price: req.body.price,
    brand: req.body.brand
  });
  productObj
    .save()
    .then(result => {
      // console.log(productObj);
      return res.status(200).json({
        status: 200,
        response: result
      });
    })
    .catch(error => {
      return res.status(500).json({
        status: 500,
        response: error
      });
    });
})


module.exports = router;