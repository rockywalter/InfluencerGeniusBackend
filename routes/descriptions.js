const router = require('express').Router();
let Descriptions = require('../models/descriptions.model');



router.route('/').get((req, res) => {
    Descriptions.find()
    .then(campaign => res.json(campaign))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;