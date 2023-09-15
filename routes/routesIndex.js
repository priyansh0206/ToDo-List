const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.get('/', controller.home);
router.get('/about', controller.about);
router.get('/contact', controller.contact);
router.get('*',controller.notFound);

module.exports = router;