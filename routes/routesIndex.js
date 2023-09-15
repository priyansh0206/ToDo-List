const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.get('/', controller.home);
router.get('/about', controller.about);
router.get('/contact', controller.contact);
router.post('/add_todo', controller.addTodo);
// router.get('/default',controller.notFound);

module.exports = router;