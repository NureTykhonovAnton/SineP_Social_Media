const Router = require('express');

const router = new Router();

const userRouter = require('./userRouter');
const genderRouter = require('./genderRouter');

router.use('/user', userRouter);
router.use('/gender', genderRouter);

module.exports = router;
