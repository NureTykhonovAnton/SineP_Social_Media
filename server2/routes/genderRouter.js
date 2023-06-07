const Router = require('express');
const genderController = require('../controllers/genderController');
const authMiddleware = require('../middleware/authMiddleware')

const router = new Router();

router.post('/', authMiddleware, genderController.create);
router.get('/', genderController.getAll);
router.put('/:id', authMiddleware, genderController.change)


module.exports = router;
