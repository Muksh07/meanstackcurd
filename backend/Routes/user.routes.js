var express = require('express');
var router = express.Router();

const {handlerAddUser,handlerGetAllUSers} = require('../Controllers/user.controller');

/* ADD users listing. */
router.post('/adduser', handlerAddUser);
router.get('/getalluser', handlerGetAllUSers);

module.exports = router;