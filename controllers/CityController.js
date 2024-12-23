const mongoose = require("mongoose");
const CityModel = require("../models/CityModel.js");

exports.addCity = async (req, res) => {
  try {
    const { city_name, city_code, status, state_id } = req.body;
    const state = new CityModel({
      city_name: city_name,
      city_code: city_code,
      state_id: state_id,
      status: status,
    });

    const data = await state.save();
    return res.status(200).send({
      status: true,
      message: "city save successfully",
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

exports.getCity = async (req, res) => {
  try {
    const callback = await CityModel.find()
      .populate("state_id", ["state_name"])
      .sort({ _id: -1 })
      .exec();
    return res.status(200).send({
      status: true,
      message: "City details",
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

exports.getActiveCity = async (req, res) => {
  try {
    const callback = await CityModel.find({status: "Active"})
      .populate("state_id", ["state_name"])
      .sort({ _id: -1 })
      .exec();
    return res.status(200).send({
      status: true,
      message: "City details",
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

exports.getCityId = async (req, res) => {
  try {
    const callback = await CityModel.findOne({
      _id: new mongoose.Types.ObjectId(req.params.cityId),
    }).exec();
    return res.status(200).send({
      status: true,
      message: "City details",
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

exports.updateCity = async (req, res) => {
  try {
    const callback = await CityModel.findByIdAndUpdate(
      new mongoose.Types.ObjectId(req.params.cityId),
      {
        $set: {
          city_name: req.body.city_name,
          city_code: req.body.city_code,
          state_id: req.body.state_id,
          status: req.body.status,
        },
      },
      { new: true }
    ).exec();
    return res.status(200).send({
      status: true,
      message: "City information Updated",
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

exports.deleteCity = async (req, res, next) => {
  try {
    const callback = await CityModel.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(req.params.cityId),
    }).exec();
    return res.status(200).send({
      status: true,
      message: "City deleted successfully",
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
