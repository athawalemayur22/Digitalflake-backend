const mongoose = require("mongoose");
const StateModel = require("../models/StateModel.js");

exports.addState = async (req, res) => {
  try {
    const { state_name, state_code, status } = req.body;
    const state = new StateModel({
      state_name: state_name,
      state_code: state_code,
      status: status,
    });

    const data = await state.save();
    return res.status(200).send({
      status: true,
      message: "state save successfully",
      data: data,
    });
  } catch (e) {
    console.log(e, "e....");
    return res.status(503).send({
      status: false,
      message: "Something went wrong!",
      data: e,
    });
  }
};

exports.getState = async (req, res) => {
  try {
    const callback = await StateModel.find().sort({ _id: -1 }).exec();
    return res.status(200).send({
      status: true,
      message: "State details",
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

exports.getActiveState = async (req, res) => {
  try {
    const callback = await StateModel.find({status:"Active"}).sort({ _id: -1 }).exec();
    return res.status(200).send({
      status: true,
      message: "State details",
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

exports.getStateById = async (req, res) => {
  try {
    const callback = await StateModel.findOne({
      _id: new mongoose.Types.ObjectId(req.params.stateId),
    }).exec();
    return res.status(200).send({
      status: true,
      message: "State details",
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

exports.updateState = async (req, res) => {
  try {
    const callback = await StateModel.findByIdAndUpdate(
      new mongoose.Types.ObjectId(req.params.stateId),
      {
        $set: {
          state_name: req.body.state_name,
          state_code: req.body.state_code,
          status: req.body.status,
        },
      },
      { new: true }
    ).exec();
    return res.status(200).send({
      status: true,
      message: "State information Updated",
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

exports.deleteState = async (req, res, next) => {
  try {
    const callback = await StateModel.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(req.params.stateId),
    }).exec();
    return res.status(200).send({
      status: true,
      message: "State deleted successfully",
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
