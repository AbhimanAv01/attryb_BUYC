const mongoose = require("mongoose");

const OEMSpecsSchema = new mongoose.Schema({
  model_name: {
    type: String,
    required: true,
  },
  year_of_model: {
    type: Number,
    required: true,
  },
  list_price: {
    type: Number,
    required: true,
  },
  available_colors: {
    type: [String],
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  power_bhp: {
    type: Number,
    required: true,
  },
  max_speed: {
    type: Number,
    required: true,
  },
});

const OEMSpecs = mongoose.model("OEM_Specs", OEMSpecsSchema);

module.exports = OEMSpecs;
