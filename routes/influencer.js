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

  router.route('/socialmediacount/:platform').get((req, res) => {
    Influencer.aggregate([
        {
            $match: {
                "Social Media Platform": req.params.platform // Filter documents where socialMedia field is 'Facebook'
            }
        },
        {
            $group: {
                _id: null, // Group all matching documents
                count: { $sum: 1 } // Count the documents
            }
        }
    ])
    .then(result => {
        if (result.length > 0) {
            const count = result[0].count;
            res.json({ count: count });
        } else {
            res.json({ count: 0 });
        }
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/allcount').get((req, res) => {
    Influencer.countDocuments()
    .then(count => {
        res.json({ count: count });
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;