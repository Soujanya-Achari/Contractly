const express = require('express');
const { createClient, getClients } = require('../controllers/clientController');
const router = express.Router();

router.post('/clients', createClient);
router.get('/clients', getClients);

module.exports = router;
