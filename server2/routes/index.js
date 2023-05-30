const Router = require('express');

const router = new Router();

const userRouter = require('./userRouter');
const genderRouter = require('./genderRouter');
const postRouter = require('./postRouter');

router.use('/user', userRouter);
router.use('/gender', genderRouter);
router.use('/post', postRouter);

module.exports = router;
