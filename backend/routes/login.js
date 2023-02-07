const router = require('express').Router();
let login = require('../models/login.model');

router.route('/').get((req, res) => {
  login.find()
    .then(login => res.json(login))
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;



  const newlogin = new login({
    username,
    password,
  });

  newlogin.save()
  .then(() => res.json(' login added'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  login.findById(req.params.id)
    .then(login => res.json(login))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports=router;