const express = require("express");
const router = express.Router();
const stateController = require("../controllers/StateController");
const { ensureAuthenticated } = require("../middlewares/Auth");
const AuthValidation = require("../middlewares/AuthValidation");

router.get("/", 
  ensureAuthenticated, 
  stateController.getState
);

router.get("/active", 
  ensureAuthenticated, 
  stateController.getActiveState
);

router.get("/:stateId", 
  ensureAuthenticated, 
  stateController.getStateById
);

router.post(
  "/addState",
  ensureAuthenticated,
  AuthValidation.stateValidation,
  stateController.addState
);

router.patch(
  "/updateState/:stateId",
  ensureAuthenticated,
  AuthValidation.stateValidation,
  stateController.updateState
);

router.delete(
  "/deleteState/:stateId",
  ensureAuthenticated,
  stateController.deleteState
);

module.exports = router;
