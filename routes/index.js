const express = require('express');
const auth = require('./api/auth/auth');
const router = express.Router()

//const tasks = require('./api/tasksRoutes');
const routines = require('./api/routinesRoutes');
const user = require('./api/userRoutes');
const AuthenticatedMiddleware = require("./../middleware/AuthenticatedMiddleware");


// to protect the following routes
router.use(auth);

//router.use(AuthenticatedMiddleware);
router.use(user);
//router.use(tasks);
router.use(routines);



module.exports = router;