const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send({ message: 'welcome to the api', test2: 'asddsa' });
});

// router.post('/todos', (req, res, next) => {});

// router.delete('/todos/:id', (req, res, next) => {});

module.exports = router;
