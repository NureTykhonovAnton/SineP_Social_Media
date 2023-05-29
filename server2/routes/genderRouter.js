const Router = require('express');
const genderRouter = require('../controllers/genderController');
const authMiddleware = require('../middleware/authMiddleware')

const router = new Router();

router.post('/', authMiddleware, genderRouter.create);
router.get('/', genderRouter.getAll);
router.put('/:id', authMiddleware, genderRouter.change)


module.exports = router;
