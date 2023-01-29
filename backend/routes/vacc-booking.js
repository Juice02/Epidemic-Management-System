const router = require('express').Router();
let vaccines = require('../models/vacc-booking.model');

router.route('/').get((req, res) => {
  vaccines.find()
    .then(vaccines => res.json(vaccines))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const adharcard = req.body.adharcard;
  const  hospital_name= req.body.hospital_name ;
  const date = Date.parse(req.body.date);
  const slot_number = req.body.slot_number;

  const newVaccine = new vaccines({
    username,
    adharcard,
    hospital_name,
    date,
    slot_number,
  });

  newVaccine.save()
  .then(() => res.json('slot availabel'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  vaccines.findById(req.params.id)
    .then(vacc_booking => res.json(vacc_booking))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
