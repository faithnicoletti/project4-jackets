const mongoose = require('mongoose');

const jacketsSchema = new mongoose.Schema(
    {
        name: {type: String}, 
        price: {type: Number},
        size: {type: String},
        description: {type: String} 
    }, 
    { timestamp: true }
);

const Jackets = mongoose.model('Jackets', jacketsSchema);
module.exports = Jackets;