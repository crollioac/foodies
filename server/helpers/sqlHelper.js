const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'foodies'
});
 
connection.connect();

const executeQuery = (query, callback) => {
  connection.query(query, (error, results) => {
    callback(error, results);
  });
};

const userLogin = (userName, password, callback) => {
  const checkUserExistsQuery = `select * from users where user_name='${userName}' and password='${password}'`;
  console.info(checkUserExistsQuery);
  executeQuery(checkUserExistsQuery, (error, results) => {
    callback(error, results[0]);
  });
};

const userRegister = (userName, password, foodItemsSelected, callback) => {
  const insertNewUserQuery = `INSERT INTO users(user_name, password, food_items_selected) values('${userName}','${password}','${foodItemsSelected}')`;
  executeQuery(insertNewUserQuery, (error, results) => {
    callback(error, results);
  });
};

module.exports = {
  userLogin,
  userRegister,
};