const router = require('express').Router();
let Comments = require('../models/comments.model');



router.route('/').get((req, res) => {
    Comments.find()
    .then(campaign => res.json(campaign))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;