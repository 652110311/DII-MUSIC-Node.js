const express = require('express');
const router = express.Router();
const service = require('../service/users')

router.get('/', async (req, res) => {
    return service.findUsers(req,res);
});

router.get('/:id', async (req, res) => {
    return service.findUser(req,res);
  });

  router.post('/', async (req, res) => {
    return service.newUser(req,res);
  });

  router.put('/:id', async (req, res) => {
    return service.editUser(req,res);
  });
  

module.exports = router;
