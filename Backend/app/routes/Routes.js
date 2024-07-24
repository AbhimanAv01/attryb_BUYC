const express = require('express');
const OEMSpecs = require('../models/OEMSpecs');
const Dealer = require('../models/Dealer');
const MarketplaceInventory = require('../models/MarketplaceInventory');
const Category =require ("../models/Category")

const router = express.Router();

// Get number of OEM models
router.get('/oem-models/count', async (req, res) => {
  try {
    const count = await OEMSpecs.countDocuments();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// GET /oem-specs/filter
router.get('/oem-specs/find', async (req, res) => {
    const { color, price, mileage } = req.query;
  
    // Create a filter object
    const filters = {};
  
    if (color) {
      filters.available_colors = { $in: [color] }; // Use $in for matching color
    }
    
    if (price) {
      // Convert price to number for comparison
      filters.list_price = { $lte: parseFloat(price) };
    }
    
    if (mileage) {
      // Convert mileage to number for comparison
      filters.mileage = { $lte: parseFloat(mileage) };
    }
  
    try {
      const oemSpecs = await OEMSpecs.find(filters);
      res.json(oemSpecs);
    } catch (err) {
      res.status(500).send({
        msg: err.message || "Error while retrieving OEM specs",
      });
    }
  });
  
//Get all em-specs items
router.get('/oem-specs', async (req, res) => {
    try {
      const oemSpecs = await OEMSpecs.find();
      res.json(oemSpecs);
    } catch (err) {
      res.status(500).send({
        msg: err.message || "Error while retrieving OEM specs",
      });
    }
  });

// Post a new OEM specification
router.post('/oem-specs/add', (req, res) => {
    const newOEMSpec = new OEMSpecs({
      model_name: req.body.model_name,
      year_of_model: req.body.year_of_model,
      list_price: req.body.list_price,
      available_colors: req.body.available_colors,
      mileage: req.body.mileage,
      power_bhp: req.body.power_bhp,
      max_speed: req.body.max_speed
    });
  
    newOEMSpec
      .save()
      .then((data) => res.send(data))
      .catch((err) => {
        res.status(500).send({
          msg: err.message || "Error while creating OEM spec",
        });
      });
  });


// Search for Honda City 2015 OEM specs
router.get('/oem-specs/search', async (req, res) => {
   try {
    const { model_name, year_of_model } = req.query;
    const filter = {};

    if (model_name) {
      // Case-insensitive regex
      filter.model_name = { $regex: new RegExp(model_name, 'i') };
    }

    if (year_of_model) {
      filter.year_of_model = Number(year_of_model);
    }

    const cars = await OEMSpecs.find(filter);
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all inventory
// router.get('/inventory', async (req, res) => {
//   try {
//     const inventory = await MarketplaceInventory.find().populate('dealer_id oem_spec_id');
//     res.json(inventory);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

//******************************************************************** */


// Get all inventory items
router.get('/inventory', async (req, res) => {
  try {
    const inventoryItems = await MarketplaceInventory.find();
    res.json(inventoryItems);
  } catch (err) {
    res.status(500).send({
      msg: err.message || "Error while retrieving inventory",
    });
  }
});

// add to inventory
router.post('/inventory/add', async (req, res) => {
    try {
      const newInventoryItem = new MarketplaceInventory({
        car_id: req.body.car_id, // Assuming _id is passed as car_id
        model_name: req.body.model_name, // Field name must match the schema
        list_price: req.body.list_price, // Field name must match the schema
        year_of_model: req.body.year_of_model, // Field name must match the schema
        milleage: req.body.milleage, // Field name must match the schema
        power: req.body.power, // Field name must match the schema
        max_speed: req.body.max_speed, // Field name must match the schema
        available_colors:req.body.available_colors,
        img_url:req.body.img_url,
        additionalInfo: req.body.additionalInfo
      });
  
      const data = await newInventoryItem.save();
      res.status(201).json(data);
    } catch (err) {
      res.status(500).send({
        msg: err.message || "Error while adding inventory item",
      });
    }
  });
  


// GET /inventory/filter
router.get('/inventory/find', async (req, res) => {
    const { available_color, list_price, milleage } = req.query;

    // Create a filter object
    const filters = {};

    if (available_color) {
        filters.available_colors = { $in: available_color.split(',') }; // Handle multiple colors
    }

    if (list_price) {
        // Convert list_price to number for comparison
        filters.list_price = { $lte: parseFloat(list_price) };
    }

    if (milleage) {
        // Convert mileage to number for comparison
        const mileageNumber = parseFloat(milleage);
        if (!isNaN(mileageNumber)) {
            filters.milleage = { $gte: mileageNumber }; // Find cars with mileage greater than or equal to the given value
        }
    }

    // Determine sort order (only if sort parameter is provided)
    let sortOrder = {};
    if (list_price) {
        switch (list_price) {
            case 'low-to-high':
                sortOrder = { list_price: 1 }; // Ascending order
                break;
            case 'high-to-low':
                sortOrder = { list_price: -1 }; // Descending order
                break;
            case 'new-arrivals':
                sortOrder = { created_at: -1 }; // Newest first (assuming created_at exists)
                break;
            default:
                sortOrder = {}; // No sorting
                break;
        }
    }

    try {
        // Convert list_price and mileage to numbers for sorting
        const inventory = await MarketplaceInventory.find(filters).sort(sortOrder);

        if (inventory.length === 0) {
            // Return a 404 status if no results are found
            return res.status(404).send({ msg: "No matching inventory found" });
        }

        res.json(inventory);
    } catch (err) {
        res.status(500).send({
            msg: err.message || "Error while retrieving inventory",
        });
    }
});






// Add a new dealer
router.post('/dealer/add', async (req, res) => {
    try {
      const { name, contact_info } = req.body;
  
      const newDealer = new Dealer({
        name,
        contact_info
      });
  
      const savedDealer = await newDealer.save();
      res.status(201).json(savedDealer);
    } catch (err) {
      res.status(500).send({
        msg: err.message || "Error while adding a new dealer",
      });
    }
  });

//category


router.get('/categories', async (req, res) => {
    try {
      const categories = await Category.find({});
      res.json(categories);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching categories', error: err });
    }
  });

  

module.exports = router;
