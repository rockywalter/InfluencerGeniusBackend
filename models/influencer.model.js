const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const influencerSchema = new Schema({
    influencer_id: { type: Number, required: true },
    "Influencer Name": { type: String, required: true },
    "Followers Count": { type: Number, required: true },
    Country: { type: String, required: true },
    "Social Media Platform": { type: String, required: true },
},{
    versionKey: false,
    collection: 'influencer',
});

const Influencer = mongoose.model('Influencer', influencerSchema);

module.exports = Influencer;