const express = require('express');
const router = express.Router();
const StringDB = require('../models/strings')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const list = await StringDB.GetList()
    res.send(list)
  } catch (e) {
    console.log()
    res.status(500).send('server error')
    next(e)
  }
});

module.exports = router;
