const Router = require('express');

const router = new Router();

const userRouter = require('./userRouter');
const genderRouter = require('./genderRouter');
const postRouter = require('./postRouter');
const groupRouter = require('./groupRouter');
const inboxRouter = require('./inboxRouter');

router.use('/user', userRouter);
router.use('/gender', genderRouter);
router.use('/post', postRouter);
router.use('/group', groupRouter);
router.use('/inbox', inboxRouter);


module.exports = router;
