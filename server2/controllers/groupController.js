const ApiError = require('../error/ApiError')
const {Group, GroupSettings, UserGroup} = require('../models/models')
const uuid = require("uuid");
const path = require("path");
const {where} = require("sequelize");


class GroupController {
    async create(req, res, next) {
        const {
            name,
            description,
        } = req.body;

        const {bannerImg} = req.files;

        const fileName = uuid.v4() + '.jpg';
        bannerImg.mv(path.resolve(__dirname, '..', 'static', fileName));

        const group = await Group.create({
            name,
            description,
            bannerImg: fileName,
        })

        const groupSettings = await GroupSettings.create({
            groupId: group.id
        })

        return res.json({group});
    }

    async getOne(req, res, next) {
        const {id} = req.params;
        try {
            const group = await Group.findOne({where: {id}});

            return res.status(200).json({group});
        } catch (e) {
            return next(ApiError.internal('Group does not exist'))
        }
    }

    async getAll(req, res, next) {
        try {
            const groups = await Group.findAll();

            return res.status(200).json({groups})
        } catch (e) {
            return next(ApiError.internal('Can\'t get groups'))
        }
    }

    async addMember(req, res, next) {
        const {groupId} = req.params;
        const {userId} = req.query;

        try {
            const userGroup = await UserGroup.create({
                userId,
                groupId
            })

            const group = await Group.findOne({where: {id: groupId}})
            await Group.update({
                members_count: group.members_count + 1
            }, {
                where: {
                    id: groupId
                }
            })

            return res.status(200).json({message: 'User added successfully '})
        } catch (e) {
            return next(ApiError.internal('Can\'t add user'))
        }
    }

    async deleteMember(req, res, next) {
        const {groupId} = req.params;
        const {userId} = req.query;

        try {
            const userGroup = await UserGroup.destroy({
                where: {
                    groupId,
                    userId
                }
            })

            const group = await Group.findOne({where: {id: groupId}})
            await Group.update({
                members_count: group.members_count - 1
            }, {
                where: {
                    id: groupId
                }
            })

            return res.status(200).json({message: 'User removed successfully'})
        } catch (e) {
            return next(ApiError.internal('Can\'t remove user'))
        }
    }
}

module.exports = new GroupController()
