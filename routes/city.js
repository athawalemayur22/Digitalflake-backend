const express = require("express");
const router = express.Router();
const CityController = require("../controllers/CityController");
const { ensureAuthenticated } = require("../middlewares/Auth");
const AuthValidation = require("../middlewares/AuthValidation");

router.get("/", 
  ensureAuthenticated, 
  CityController.getCity
);

router.get("/active", 
  ensureAuthenticated, 
  CityController.getActiveCity
);

router.get("/:cityId", 
  ensureAuthenticated, 
  CityController.getCityId
);

router.post(
  "/addCity",
  ensureAuthenticated,
  AuthValidation.cityValidation,
  CityController.addCity
);

router.patch(
  "/updateCity/:cityId",
  ensureAuthenticated,
  AuthValidation.cityValidation,
  CityController.updateCity
);

router.delete(
  "/deleteCity/:cityId",
  ensureAuthenticated,
  CityController.deleteCity
);

module.exports = router;
