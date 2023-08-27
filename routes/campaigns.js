const router = require('express').Router();
let Campaign = require('../models/campaigns.model');



router.route('/').get((req, res) => {
    Campaign.find()
    .then(campaign => res.json(campaign))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const { campaignName,category,campaignKeywords,influencers } = req.body;

    const newCampaign = new Campaign({
    campaignName,
    category,
    campaignKeywords,
    influencers,
    });

    newCampaign.save()
    .then(() => res.json('Campaign added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) => {
    Campaign.findByIdAndDelete(req.params.id)
    .then(() => res.json('Campaign deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;