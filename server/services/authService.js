const sqlHelper = require("../helpers/sqlHelper");

const userLogin = (req, userName, password, callback) => {
  
  sqlHelper.userLogin(userName, password, (error, data) => {

    if(error) {
        callback(error, null);
        return;
    }

    const { id, user_name } = data;
    delete data.password;
    data['accesstoken'] = `${id}_${user_name}`;
    callback(error, data);
  });
};

const userRegister = (req, userName, password, foodItemsSelected, callback) => {
  
  sqlHelper.userRegister(userName, password, foodItemsSelected, (error, data) => {
    
    if(error) {
      callback(error, null);
      return;
  }
  callback(error, data);
  });
};

module.exports = {
  userLogin,
  userRegister,
};