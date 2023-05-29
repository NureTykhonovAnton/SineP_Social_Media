const {Gender} = require("../models/models");
const ApiError = require('../error/ApiError');

class GenderController{
    async create(req, res, next){
        const {name} = req.body;

        try{
            const gender = await Gender.create({
                name
            })

            res.status(200).json({message: 'Gender created'})
        } catch (e) {
            return next(ApiError.internal(e.message));
        }

    }

    async getAll(req, res, next){
        try {
            const allGenders = await Gender.findAll();

            res.status(200).json({genders: allGenders});
        } catch (e){
            return next(ApiError.internal(e.message))
        }
    }

    async change(req, res, next) {
        const {name} = req.body;
        const {id} = req.params;

        try{
            const newGender = await Gender.update({
                name
            }, {
                where: {
                    id: id
                }
            })

            res.status(200).json({message: "Gender updated successfully"})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }
}

module.exports = new GenderController()
