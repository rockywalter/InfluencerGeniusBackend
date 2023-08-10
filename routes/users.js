const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login/:username/:password').get((req, res) => {
   

       const filter = {}
       if (req.params.username) {
               filter.username = req.params.username;
            }
            if (req.params.password) {
                filter.password = req.params.password;
             }

  
    async function fetchUsers() {
        try {
          const user = await User.findOne(filter).exec();
          
          if(!user)
          {
            res.json("invalid");
          }
          else{
            res.json("successful");
          }
        } catch (error) {
          console.error('Error fetching users:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
    
      fetchUsers();


});

// router.route('/searchflights').get((req, res) => {
//     const { departure, arrival, dDate,aDate,cClass } = req.query;

  
   

//     const filter = {};

//     if (departure) {
//       filter.departure_destination = departure;
//     }
//     if (arrival) {
//       filter.arrival_destination = arrival;
//     }
//     if (dDate) {
//       filter.departure_date = dDate;
//     }
//     if (aDate) {
//       filter.arrival_date = aDate;
//     }
//     if (cClass) {
//       filter.cabin_class = cClass;
//     }
  
  
//     async function fetchFlights() {
//         try {
//           const flights = await Flight.find(filter).exec();
//           res.json(flights);
//         } catch (error) {
//           console.error('Error fetching flights:', error);
//           res.status(500).json({ error: 'Internal Server Error' });
//         }
//       }
    
//       fetchFlights();


// });

router.route('/add').post((req, res) => {
  
  const username = req.body.username;
  const password = req.body.password;


  const newUser = new User({
    username,
    password,

  });

  newUser.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').get((req, res) => {
//     Flight.findById(req.params.id)
//     .then(flight => res.json(flight))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req, res) => {
//     Flight.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Flight deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//     Flight.findById(req.params.id)
//     .then(exercise => {
//       exercise.username = req.body.username;
//       exercise.description = req.body.description;
//       exercise.duration = Number(req.body.duration);
//       exercise.date = Date.parse(req.body.date);

//       exercise.save()
//         .then(() => res.json('Flight updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;