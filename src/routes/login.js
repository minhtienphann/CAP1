const express = require('express');
const router = express.Router();
const loginController = require('../app/controllers/LoginController');


router.get('/',loginController.index);
router.post('/user',loginController.login);
router.get('/user/logout',loginController.logout);


module.exports = router;