const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const descriptionSchema = new Schema({
    influencer_id: { type: Number, required: true },
    description: { type: String, required: true },
    "Like Count for the post" : { type: Number, required: true },
    "Comment Count for the post" : { type: Number, required: true },
    "Followers Count for influencer" : { type: Number, required: true },
    category : { type: String, required: true },
},{
    versionKey: false,
    collection: 'descriptions',
});

const Description = mongoose.model('Description', descriptionSchema);

module.exports = Description;