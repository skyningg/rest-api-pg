const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome users api'))

router.post('/users', controllers.createUser);
router.get('/user', controllers.getAllUsers);

module.exports = router;
