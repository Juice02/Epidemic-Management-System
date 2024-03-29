const router = require('express').Router();
let vaccines = require('../models/booking.model');

router.route('/').get((req, res) => {
  vaccines.find()
    .then(vaccines => res.json(vaccines))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const booking_id=req.body.booking_id;
  const username = req.body.username;
  const adharcard = req.body.adharcard;
  const  hospital_name= req.body.hospital_name ;
  const date = req.body.date;
  const slot_number = req.body.slot_number;

  const newVaccine = new vaccines({
    booking_id,
    username,
    adharcard,
    hospital_name,
    date,
    slot_number,
  });

  newVaccine.save()
  .then(() => res.json('slot available'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  vaccines.findById(req.params.id)
    .then(vacc_booking => res.json(vacc_booking))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
  Patient.findById(req.params.id)
    .then(pat => {
      pat.booking_id=req.body.booking_id;
      pat.username = req.body.username;
      pat.adharcard = req.body.adharcard;
      pat.hospital_name= req.body.hospital_name ;
      pat.date = req.body.date;
      pat.slot_number = req.body.slot_number;

      pat.save()
        .then(() => res.json('Booking Details updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
