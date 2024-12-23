const { string } = require('joi');
const mongoose = require('mongoose');
require('../db_connection');

const StateSchema = new mongoose.Schema(
  {
    state_name: {
      type: String,
      required: true,
      index: true,
    },
    state_code: {
      type: String,
      required: true,
      index: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

const StateModel = mongoose.model("states", StateSchema);
module.exports = StateModel;