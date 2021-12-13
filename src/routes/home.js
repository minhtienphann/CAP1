const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');


router.get('/',homeController.index);
router.post('/give',homeController.give);
router.post('/take',homeController.take);
module.exports = router;