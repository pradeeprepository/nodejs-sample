var PRODUCT_MODEL = require('../models/products.model');
var PRODUCT_PAGE_MODEL = require('../models/products-page.model');
const multer = require('multer');
var mongoose = require('mongoose');

//GET: List of products
exports.getProductsList = (req, res, next) => {
  PRODUCT_MODEL.find()
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
};

// POST: Update records
exports.updateProductList = (req, res, next) => {
  const newObj = new PRODUCT_MODEL({
    title: req.body.title,
    offerPercentage: req.body.offerPercentage,
    type: req.body.type,
    size: req.body.size,
    price: req.body.price,
    brand: req.body.brand
  });
  PRODUCT_MODEL.findOneAndUpdate(req.body._id, newObj, {
    new: true,
    useFindAndModify: false
  })
    .then(result => {
      // console.log(result);
      return res.status(200).json({
        status: 200,
        response: 'Product updated successfully!'
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
exports.deleteProductList = (req, res, next) => {
  PRODUCT_MODEL.findByIdAndRemove({ _id: req.body._id })
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

// POST: PRODUCT PAGE landing page
exports.createProductPage = (req, res, next) => {
  const obj = new PRODUCT_PAGE_MODEL({
    _id: new mongoose.Types.ObjectId(),
    carousel: [
      {
        image: '../../../../../assets/images/bussiness-bg6.jpg',
        sloganTitle: 'SHOP BY BRANDS',
        subSloganTitle: 'BUSINESS WEAR Rule the work week'
      },
      {
        image: '../../../../../assets/images/bussiness-bg4.jpg',
        sloganTitle: 'Fashion Steals',
        subSloganTitle: 'Get the latest styles at unbelievable prices!'
      },
      {
        image: '../../../../../assets/images/bussiness-bg5.jpg',
        sloganTitle: 'New Arrivals',
        subSloganTitle: 'Most popular products grab them till they past'
      }
    ],
    firstLayer: [
      {
        title: 'New Collection(40%)',
        image: '../../../../../assets/images/bussiness-bg6.jpg',
        content:
          'The Shiba Inu is the smallest of the six original and distinct',
        buttonText: 'Get Collection'
      },
      {
        title: 'Treding(10%)',
        image: '../../../../../assets/images/bussiness-bg6.jpg',
        content:
          'The Shiba Inu is the smallest of the six original and distinct',
        buttonText: 'Get Trends'
      },
      {
        title: 'Bussiness Class(40%)',
        image: '../../../../../assets/images/bussiness-bg6.jpg',
        content:
          'The Shiba Inu is the smallest of the six original and distinct',
        buttonText: 'Get Brands'
      }
    ],
    secondLayer: [
      {
        title: 'Fashion Wear',
        image: '../../../../../assets/images/bussiness-bg1.jpg',
        buttonText: '50% Offer'
      },
      {
        title: 'Bussiness Wear',
        image: '../../../../../assets/images/bussiness-bg2.jpg',
        buttonText: '50% Offer'
      },
      {
        title: 'Fest Carnival',
        image: '../../../../../assets/images/bussiness-bg3.jpg',
        buttonText: '50% Offer'
      }
    ],
    thridLayer: [
      {
        title: '50% on PartyWear',
        image: '../../../../../assets/images/bussiness-bg5.jpg',
        buttonText: 'Order Now'
      },
      {
        title: '30% on Brand New Collection',
        image: '../../../../../assets/images/bussiness-bg2.jpg',
        buttonText: 'Check Now'
      }
    ]
  });
  obj
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

// GET: PRODUCT PAGE landing page
exports.productsPageList = (req, res, next) => {
  PRODUCT_PAGE_MODEL.find()
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
};
