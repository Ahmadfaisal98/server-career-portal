const router = require('express').Router()
const loginRouter = require('../routes/loginRouter')
const registerRouter = require('../routes/registerRouter')
const companyRouter = require('../routes/companyRouter')
const jobRouter = require('../routes/jobRouter')
const userRouter = require('../routes/userRouter')
const loginGoogle = require('../routes/loginGoogle')
const historyRouter = require('../routes/historyRouter')
const { authentication } = require("../middlewares/auth")
const errorHandler = require('../middlewares/errorHandler')

router.use('/login',loginRouter)             
router.use('/register',registerRouter)
router.use('/loginGoogle',loginGoogle)

router.use(authentication)

router.use('/histories',historyRouter) 
router.use('/companies',companyRouter) 
router.use('/jobs',jobRouter) 
router.use('/users',userRouter)

router.use(errorHandler)

module.exports = router