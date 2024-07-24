const mongoose = require('mongoose');

const DealerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contact_info: {
    type: String,
    required: true
  }
});

const Dealer = mongoose.model('Dealer', DealerSchema);

module.exports = Dealer;
