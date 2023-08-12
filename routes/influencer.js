const router = require('express').Router();
let Influencer = require('../models/influencer.model');

router.route('/').get((req, res) => {
    Influencer.find()
    .then(influencers => res.json(influencers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  
    const influencer_id = req.body.influencer_id;
    const influencerName =req.body["Influencer Name"];
    const followersCount =req.body["Followers Count"];
    const country =req.body["Country"];
    const socialMediaPlatform =req.body["Social Media Platform"];
  
  
    const newInfluencer = new Influencer({
        influencer_id : influencer_id,
        "Influencer Name" :influencerName,
        "Followers Count":followersCount,
        "Country":country,
        "Social Media Platform": socialMediaPlatform,
    });
  
    newInfluencer.save()
    .then(() => res.json('Influencer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;