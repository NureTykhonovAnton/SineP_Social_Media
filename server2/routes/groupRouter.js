const Router = require('express');
const groupController = require('../controllers/groupController');
const authMiddleware = require('../middleware/authMiddleware')

const router = new Router();

router.post('/', authMiddleware, groupController.create);
router.get('/', groupController.getAll);
router.get('/:groupId', authMiddleware, groupController.getOne);
router.put('/member/:groupId', authMiddleware, groupController.addMember);
router.delete('/member/:groupId', authMiddleware, groupController.deleteMember);


module.exports = router;
