const mongoose = require('mongoose');
require('../db_connection');

const WarehouseSchema = new mongoose.Schema(
  {
    warehouse_name: {
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
    city_id: {
      type: mongoose.Schema.ObjectId,
      ref: "citys",
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

const WarehouseModel = mongoose.model("warehouses", WarehouseSchema);
module.exports = WarehouseModel;