const router = require('express').Router();
let Descriptions = require('../models/descriptions.model');



router.route('/').get((req, res) => {
    Descriptions.find()
    .then(campaign => res.json(campaign))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/categorycount').get((req, res) => {
    const categories = [
        "Technology and Electronics",
        "Fashion and Apparel",
        "Health and Wellness",
        "Personal Development and Education",
        "Hospitality and Food Services"
    ];

    const countPromises = categories.map(category => {
        return Descriptions.countDocuments({ category: category });
    });

    const totalCountPromise = Descriptions.countDocuments();

    Promise.all([totalCountPromise, ...countPromises])
        .then(results => {
            const totalCount = results[0];
            const categoryCounts = {};

            categories.forEach((category, index) => {
                categoryCounts[category] = results[index + 1];
            });

            const response = {
                total: totalCount,
                ...categoryCounts
            };

            res.json(response);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;