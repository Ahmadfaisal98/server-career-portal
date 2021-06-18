const { User } = require('../models')
 
class RegisterController {
    static registerPost(req, res, next) {
        const {email, password} = req.body
        User.create({email, password, role: 'admin'})
        .then(user => {
            res.status(201).json({id: user.id, email:user.email})
            
        }).catch(err => {
            if (err.name === "SequelizeUniqueConstraintError" || err.name === 'SequelizeValidationError') {
                err = err.errors.map(e => e.message)
                next({statusCode: 400, message: err})
            } else {
                next({statusCode: 500})
            }
        })
    }
}

module.exports = RegisterController