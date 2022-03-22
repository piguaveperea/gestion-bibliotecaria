const router = require('express').Router();
const { authController } = require('../controllers')

router.get('/signin', authController.getSingIn)
router.post('/signin', authController.postSignIn)

router.get('/recoverypass', authController.getRecoveryPass)
router.post('/recoverypass', authController.postRecoveryPass)

router.get('/register', authController.getRegister)
router.post('/register', authController.postRegister)

module.exports = router