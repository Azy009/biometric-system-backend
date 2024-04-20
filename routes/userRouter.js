const express = require('express')
const multer = require('multer')
const register = require('../Controllers/User/register');
const login = require('../Controllers/User/login');
const singleuser = require('../Controllers/User/singleuser');
const updateuser = require('../Controllers/User/updateuser');
const router = express.Router()
router.get('/:id',singleuser)
router.post('/register',register)
router.post('/login',login)
router.patch('/:id',updateuser);
module.exports = router