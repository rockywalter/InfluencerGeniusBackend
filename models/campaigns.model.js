const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  campaignName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  campaignKeywords: {
    type: [String],
  },
  influencers: [
    {
      Country: String,
      'Followers Count': Number,
      'Influencer Name': String,
      'Social Media Platform': String,
      category: Number,
      hash_tags: Number,
      influencer_id: Number,
      review_score: Number,
    },
  ],
},{
    timestamps: true,
});

const Campaing = mongoose.model('Campaign', campaignSchema);

module.exports = Campaing;
