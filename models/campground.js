const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampGroundSchema = new Schema({
    title: String,
    description: String,
    image: String,
    price: Number,
    location: String
});

module.exports = mongoose.model('Campground', CampGroundSchema);