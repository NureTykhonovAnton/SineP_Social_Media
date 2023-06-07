const Router = require('express');
const inboxController = require('../controllers/inboxController');
const authMiddleware = require('../middleware/authMiddleware')

const router = new Router();

router.post('/', inboxController.create);
router.put('/read/:id', authMiddleware, inboxController.setRead);
router.get('/', authMiddleware, inboxController.getAllInboxes);
router.delete('/:id', authMiddleware, inboxController.delete);


module.exports = router;
