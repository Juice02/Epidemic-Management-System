const router = require('express').Router();
let Patient = require('../models/patient.model');

router.route('/').get((req, res) => {
  Patient.find()
    .then(patients => res.json(patients))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/add').post((req, res) => {
  const pname = req.body.pname;
  const location= req.body.location;
  const age= Number(req.body.age);
  const status= req.body.status;
  const p_history= req.body.p_history;

  const newpatient = new Patient({
    pname,
    location,
    age,
    status,
    p_history
  });


  newpatient.save()
    .then(() => res.json('Patient added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Patient.findByIdAndDelete(req.params.id)
      .then(() => res.json('Patient info deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;