const express = require("express");
const router = express.Router();
const WarehouseController = require("../controllers/WarehouseController");
const { ensureAuthenticated } = require("../middlewares/Auth");
const AuthValidation = require("../middlewares/AuthValidation");

router.get(
  "/",
  ensureAuthenticated,
  WarehouseController.getWarehouse
);

router.get("/:warehouseId", 
    ensureAuthenticated, 
    WarehouseController.getWarehouseId
);

router.post(
  "/addWarehouse",
  ensureAuthenticated,
  AuthValidation.warehouseValidation,
  WarehouseController.addWarehouse
);

router.patch(
  "/updateWarehouse/:warehouseId",
  ensureAuthenticated,
  AuthValidation.warehouseValidation,
  WarehouseController.updateWarehouse
);

router.delete(
  "/deleteWarehouse/:warehouseId",
    ensureAuthenticated,
  WarehouseController.deleteWarehouse
);

module.exports = router;
