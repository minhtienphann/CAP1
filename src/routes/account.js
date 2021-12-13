const express = require('express');
const router = express.Router();
const accountController = require('../app/controllers/AccountController');

router.post('/update',accountController.update);
router.post('/changepass',accountController.changepass);
router.get('/', accountController.index);


module.exports = router;