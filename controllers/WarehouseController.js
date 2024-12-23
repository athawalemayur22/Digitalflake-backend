const mongoose = require("mongoose");
const WarehouseModel = require("../models/WareHouseModel");

exports.addWarehouse = async (req, res) => {
  try {
    const { warehouse_name, city_id, status, state_id } = req.body;
    const warehouse = new WarehouseModel({
      warehouse_name: warehouse_name,
      state_id: state_id,
      city_id: city_id,
      status: status,
    });

    const data = await warehouse.save();
    return res.status(200).send({
      status: true,
      message: "warehouse save successfully",
      data: data,
    });
  } catch (e) {
    return res.status(503).send({
      status: false,
      message: "Something went wrong!",
      data: e,
    });
  }
};

exports.getWarehouse = async (req, res) => {
  try {
    const callback = await WarehouseModel.find()
      .populate("state_id", ["state_name"])
      .populate("city_id", ["city_name"])
      .sort({ _id: -1 })
      .exec();
    return res.status(200).send({
      status: true,
      message: "Warehouse details",
      data: callback,
    });
  } catch (err) {
    return res.status(503).send({
      status: false,
      message: "Something went wrong!",
      data: err,
    });
  }
};

exports.getWarehouseId = async (req, res) => {
  try {
    const callback = await WarehouseModel.findOne({
      _id: new mongoose.Types.ObjectId(req.params.warehouseId),
    }).exec();
    return res.status(200).send({
      status: true,
      message: "Warehouse details",
      data: callback,
    });
  } catch (err) {
    return res.status(503).send({
      status: false,
      message: "Something went wrong!",
      data: err,
    });
  }
};

exports.updateWarehouse = async (req, res) => {
  try {
    const callback = await WarehouseModel.findByIdAndUpdate(
      new mongoose.Types.ObjectId(req.params.warehouseId),
      {
        $set: {
          warehouse_name: req.body.warehouse_name,
          city_id: req.body.city_id,
          state_id: req.body.state_id,
          status: req.body.status,
        },
      },
      { new: true }
    ).exec();
    return res.status(200).send({
      status: true,
      message: "Warehouse information Updated",
      data: callback,
    });
  } catch (err) {
    return res.status(503).send({
      status: false,
      message: "Something went wrong!",
      data: err,
    });
  }
};

exports.deleteWarehouse = async (req, res, next) => {
  try {
    const callback = await WarehouseModel.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(req.params.warehouseId),
    }).exec();
    return res.status(200).send({
      status: true,
      message: "Warehouse deleted successfully",
      data: {},
    });
  } catch (e) {
    return res.status(503).send({
      status: false,
      message: "Something went wrong!",
      data: {},
    });
  }
};
