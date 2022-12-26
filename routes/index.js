const express = require('express');
const router = express.Router();

const controller = require('../controller/userController');


router.get('/', controller.main);
router.get('/create', controller.userForm);
router.post('/create', controller.fillForm);
router.get('/edit/:id', controller.editUser);
router.put('/update/:id', controller.updateUser);
router.get('/user/:id', controller.viewUser);
router.delete('/delete/:id', controller.deleteUser);


module.exports = router;