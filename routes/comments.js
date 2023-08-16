const router = require('express').Router();
let Comments = require('../models/comments.model');



router.route('/').get((req, res) => {
    Comments.find()
    .then(campaign => res.json(campaign))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/allcount').get((req, res) => {
    Comments.countDocuments()
    .then(count => {
        res.json({ count: count });
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;