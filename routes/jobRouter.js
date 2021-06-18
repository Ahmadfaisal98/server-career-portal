const JobController = require('../controllers/jobController')
const router = require('express').Router()
const { authorizationJob, authorizationAdmin } = require('../middlewares/auth')

router.get('/', JobController.jobGet)
router.get('/:id', JobController.jobGetOne)
router.post('/', JobController.jobPost)

router.patch('/:id', authorizationAdmin, JobController.jobPatch)
router.put('/:id', authorizationJob, JobController.jobPut)
router.delete('/:id', authorizationJob, JobController.jobDelete)

module.exports = router