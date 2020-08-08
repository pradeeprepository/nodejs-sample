var mongoose = require("mongoose");

// Book Notification module

var bookNotifcationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  dashboardTitle: String,
  notificationCount: Number,
  notificationModule: [{
    category: String,
    message: String
  }]
});

module.exports = mongoose.model("BookNotification", bookNotifcationSchema);