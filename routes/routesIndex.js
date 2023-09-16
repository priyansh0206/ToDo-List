const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.get('/', controller.home);
router.post('/add_todo', controller.addTodo);
router.get('/delete_todo', controller.deleteTodo)
// router.get('/default',controller.notFound);

module.exports = router;