const authService =  require("../services/authService");

const userLogin = (req, res) => {
  const reqBody = req.body;
  const { userName, password } = reqBody;
  
  authService.userLogin(req, userName, password, (error, data) => {

    if(error) {
        res.send({
            error,
            code: 404,
            message: "Failed to login",
        });
        return;
    }
    
    res.json(data);
  });
};

const userRegister = (req, res) => {
  const reqBody = req.body;
  const { userName, password, foodItemsSelected } = reqBody;
  
  authService.userRegister(req, userName, password, JSON.stringify(foodItemsSelected), (error, data) => {
    if(error) {
        res.send({
            error,
            code: 400,
            message: "Failed to register",
        });
        return;
    }
    
    res.json(data);
  });
};

module.exports = {
  userLogin,
  userRegister
};