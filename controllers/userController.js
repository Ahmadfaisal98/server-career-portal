const { User } = require('../models/index')

class UserController {
    static userGet(req, res, next) {
        User.findAll()
        .then(user => {
            user.forEach(e => delete e.dataValues.password);
            res.status(200).json({user})
        }).catch(err => {
            next({statusCode: 500})
        })
    }
    static userGetOne(req, res, next) {
        User.findByPk(req.params.id)
        .then(user => {
            if (user) {
                delete user.dataValues.password;
                res.status(200).json({user})
            } else {
                next({statusCode: 404})
            }
        }).catch(err => {
            next({statusCode: 500})
        })
    }
    static userPost(req, res, next) {
        const {email, password} = req.body
        User.create({email, password})
        .then(user => {
            delete user.dataValues.password;
            res.status(201).json({user})
        }).catch(err => {
            if (err.name === "SequelizeUniqueConstraintError" || err.name === 'SequelizeValidationError') {
                err = err.errors.map(e => e.message)
                res.status(400).json({message: err})
            } else {
                next({statusCode: 500})
            }
        })
    }
    static userPut(req, res, next) {
        const {username, email, password, role, phoneNumber, address} = req.body
        User.update({username, email, password, role, phoneNumber, address},{
            where: {
                id: req.params.id
            }
        }).then(user => {
            if (user[0]) {
                res.status(200).json({username, email, role, phoneNumber, address})
            } else {
                next({statusCode: 404})
            }
        }).catch(err => {
            if (err.name === "SequelizeUniqueConstraintError" || err.name === 'SequelizeValidationError') {
                err = err.errors.map(e => e.message)
                res.status(400).json({message: err})
            } else {
                next({statusCode: 500})
            }
        })
    }
    static userDelete(req, res, next) {
        let entity
        User.findByPk(req.params.id)
        .then(user => {
            entity = user
            return User.destroy({
                where:{
                    id: req.params.id
            }})
        })
        .then(user => {
            if (entity) {
                res.status(200).json({message: `${entity.email} success to delete`})   
            } else {
                next({statusCode: 404})
            }
        })
        .catch(err => {
            next({statusCode: 500})
        })
    }
}

module.exports = UserController