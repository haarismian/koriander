const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send({ test: 'asd', test2: 'asddsa' });
});

// router.post('/todos', (req, res, next) => {});

// router.delete('/todos/:id', (req, res, next) => {});

module.exports = router;
