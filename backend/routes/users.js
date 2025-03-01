const { getAllUsers, singUpUser, loginUser } = require('../controllers/users.controller');
const express = require('express');
const router = express.Router();


router.get('/users', getAllUsers);
router.post('/sign-up', singUpUser);
router.post('/login', loginUser);

module.exports = router;