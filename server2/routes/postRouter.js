const Router = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware')

const router = new Router();

router.post('/', authMiddleware, postController.create);
router.put('/like/:id', authMiddleware, postController.like);
router.put('/dislike/:id', authMiddleware, postController.dislike);
router.get('/:id', authMiddleware, postController.getOnePost);
router.get('/', authMiddleware, postController.getAll);
router.delete('/:id', authMiddleware, postController.delete);
router.put('/:id', authMiddleware, postController.redact);
router.get('/statistic/:id', authMiddleware, postController.getStatistic);


module.exports = router;
