const mongoose = require('mongoose');
require('../db_connection');

const CitySchema = new mongoose.Schema(
  {
    city_name: {
      type: String,
      required: true,
      index: true,
    },
    city_code: {
      type: String,
      required: true,
      index: true,
    },
    state_id: {
      type: mongoose.Schema.ObjectId,
      ref: "states",
      default: null,
      index: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    }
  },
  { timestamps: true }
);

const CityModel = mongoose.model("citys", CitySchema);
module.exports = CityModel;