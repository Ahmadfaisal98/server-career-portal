const UserController = require('../controllers/UserController')
const router = require('express').Router()

router.get('/', UserController.userGet)
router.get('/:id', UserController.userGetOne)
router.post('/', UserController.userPost)
router.put('/:id', UserController.userPut)
router.delete('/:id', UserController.userDelete)

module.exports = router