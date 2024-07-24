const mongoose = require('mongoose');

// Define the schema for Marketplace Inventory
const MarketplaceInventorySchema = new mongoose.Schema({
  car_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OEMSpecs',
    required: true
  },
  model_name: {
    type: String,
    required: true
  },
  list_price: {
    type: String,
    required: true
  },
  year_of_model: {
    type: String,
    required: true
  },
  milleage: {
    type: String,
    required: true
  },
  power: {
    type: String,
    required: true
  },
  max_speed: {
    type: String,
    required: true
  },
  available_colors: {
    type: [String],
    required: true,
  },
  img_url: {
    type: [String],
    required: true,
  },
  additionalInfo: {
    original_paint: {
      type: String, 
      required: true
    },
    accidents_reported: {
      type: String, 
      required: true
    },
    kms_on_odometer: {
      type: String,
      required: true
    },
    major_scratches: {
      type: String, 
      required: true
    },
    previous_buyers: {
      type: String,
      required: true
    },
    registration_place: {
      type: String,
      required: true
    }
  }
});

// Create the model using the schema
const MarketplaceInventory = mongoose.model('MarketplaceInventory', MarketplaceInventorySchema);

module.exports = MarketplaceInventory;
