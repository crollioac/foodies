const sqlHelper = require("../helpers/sqlHelper");

const userUpdate = (req, displayName, email, mobile, foodItemsSelected, locationDetails, callback) => {
  
  sqlHelper.userUpdate(displayName, email, mobile, foodItemsSelected, locationDetails, (error, data) => {
    if(error) {
      callback(error, null);
      return;
    }
    callback(error, data);
  });
};

module.exports = {
  userUpdate
}