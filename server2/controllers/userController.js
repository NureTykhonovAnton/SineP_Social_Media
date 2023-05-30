const ApiError = require('../error/ApiError')
const {User} = require('../models/models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {
            name,
            surname,
            nickname,
            password,
            birthday,
            country,
            city,
            genderId,
            avatar,
            profile_description
        } = req.body


        const candidate = await User.findOne({where: {nickname}})
        if (candidate) {
            return next(ApiError.badRequest('User is existing'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create(
            {
                name,
                surname,
                nickname,
                password: hashPassword,
                birthday,
                country,
                genderId,
                city,
                avatar,
                profile_description
            }
        )

        const newUser = await User.update({
            userSettingsId: user.id
        }, {
            where: {
                id: user.id
            }
        });

        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});

    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('No user with such email'));
        }

        const comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Incorrect password'));
        }

        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()
