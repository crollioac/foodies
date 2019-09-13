const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const foodController = require("../controllers/foodController");

router.post("/auth/login", authController.userLogin);

router.post("/auth/register", authController.userRegister);

// router.get("/user/profile", userController.getUserProfile);

// router.get("/food/onboarding/list", foodController.getOnboardingFoodList);


module.exports = router;
