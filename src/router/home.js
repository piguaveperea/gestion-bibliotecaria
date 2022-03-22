const  router = require('express').Router();
const { homeController } = require('../controllers')
router.get('/', homeController.getHome)

module.exports = router