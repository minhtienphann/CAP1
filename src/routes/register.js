const express = require('express');
const router = express.Router();
const registerController = require('../app/controllers/RegisterController');

router.get('/',registerController.index);

router.get('/show',registerController.show);


// router.post('/registing',registerController.registing);



module.exports = router;