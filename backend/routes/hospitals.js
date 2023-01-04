const router = require('express').Router();
let Hospital = require('../models/hospital.model');

router.route('/').get((req, res) => {
  Hospital.find()
    .then(hospitals => res.json(hospitals))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req, res) => {
  const hname = req.body.hname;
  const hlocation = req.body.hlocation;
  const nbeds = Number(req.body.nbeds);
  const nvents = Number(req.body.nvents);
  const nO2 = Number(req.body.O2);
  const nvax = Number(req.body.nvax);



  const newHospital = new Hospital({
    hname,
    hlocation,
    nbeds,
    nvents,
    nO2,
    nvax
  });

  newHospital.save()
  .then(() => res.json('hospital added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Hospital.findById(req.params.id)
    .then(hospitals => res.json(hospitals))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Hospital.findByIdAndDelete(req.params.id)
    .then(() => res.json('Hospital info deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Hospital.findById(req.params.id)
    .then(hos => {
      hos.username = req.body.username;
      hos.description = req.body.description;
      hos.duration = Number(req.body.duration);
      hos.date = Date.parse(req.body.date);

      hos.save()
        .then(() => res.json('Hospital Details updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;