var mongoose = require('mongoose');
/** Mongoose connection  */
var url =
  'mongodb+srv://anil:anil@cluster0-qwj3j.azure.mongodb.net/fashion-products?retryWrites=true&w=majority';
var mongooseConnection = mongoose.connect(url, { useNewUrlParser: true });

mongooseConnection.catch(error => {
  console.log(error);
});
