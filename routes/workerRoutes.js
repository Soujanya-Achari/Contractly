const express = require('express');
const { createWorker, getWorkers } = require('../controllers/workerController');
const router = express.Router();

router.post('/workers', createWorker);
router.get('/workers', getWorkers);

module.exports = router;
