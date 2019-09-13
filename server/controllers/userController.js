const userService =  require("../services/userService");


const userUpdate = (req, res) => {
  const reqBody = req.body;
  const { displayName, email, mobile, foodItemsSelected, locationDetails } = reqBody;
  
  userService.userUpdate(req, displayName,  email, mobile, foodItemsSelected, locationDetails,(error, data) => {
    if(error) {
      res.send({
          error,
          code: 400,
          message: "Failed to update",
      });
      return;
    }
    res.json(data);
  });
};

module.exports = {
  userUpdate
}