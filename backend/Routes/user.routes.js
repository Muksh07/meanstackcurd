var express = require('express');
var router = express.Router();

const {handlerAddUser,handlerGetAllUSers,handlerLoginUser} = require('../Controllers/user.controller');
const authenticateToken = require('../middleware/auth');

/* ADD users listing. */
router.post('/adduser', handlerAddUser);
router.get('/getalluser', handlerGetAllUSers);
router.post('/login', handlerLoginUser);

module.exports = router;