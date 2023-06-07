const {Inbox} = require('../models/models');
const ApiError = require('../error/ApiError')

class InboxController {
    async create(req, res, next) {
        const {userId} = req.query;

        const {
            content,
            type
        } = req.body;

        try {
            const inbox = await Inbox.create({
                content,
                type,
                userId
            })

            return res.status(200).json({message: 'Inbox created successfully'});
        } catch (e) {
            console.log(e.message);
            return next(ApiError.internal('Can\'t create inbox'));
        }
    }

    async setRead(req, res, next) {
        const {id} = req.params;

        try {
            await Inbox.update({
                isRead: true
            }, {
                where: {
                    id
                }
            })

            return res.status(200).json({message: 'Inbox read successfully'})
        } catch (e) {
            return next(ApiError.internal('Can\'t read inbox'))
        }
    }

    async getAllInboxes(req, res, next) {
        const {isRead} = req.query;

        try {
            let inboxes;
            if (isRead) {
                inboxes = await Inbox.findAll({where: {isRead}});
            } else {
                inboxes = await Inbox.findAll();
            }

            return res.status(200).json({inboxes})
        } catch (e) {
            return next(ApiError.internal('Can\'t get inboxes'));
        }
    }

    async delete(req, res, next) {
        const {id} = req.params;

        try {
            await Inbox.destroy({where: {id}})

            return res.status(200).json({message: 'Inbox deleted successfully'});
        } catch (e) {
            return next(ApiError.internal('Can\'t delete inbox'));
        }
    }
}

module.exports = new InboxController();
