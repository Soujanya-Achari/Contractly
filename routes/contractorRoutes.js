const express = require('express');
const { createContractor, getContractors } = require('../controllers/contractorController');
const router = express.Router();

router.post('/contractors', createContractor);
router.get('/contractors', getContractors);

module.exports = router;
