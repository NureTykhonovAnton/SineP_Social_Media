const ApiError = require('../error/ApiError')
const {Post} = require('../models/models')
const path = require("path");
const uuid = require('uuid');


class PostController {
    async create(req, res, next) {
        const {
            creator_type,
            creatorId,
            isNSFW,
            description,
            title
        } = req.body;


        const {photo} = req.files;

        const fileName = uuid.v4() + '.jpg';
        photo.mv(path.resolve(__dirname, '..', 'static', fileName));


        try {
            const post = await Post.create({
                creatorId,
                creator_type,
                isNSFW,
                title,
                description,
                likes: [],
                dislikes: [],
                photo: fileName
            })

            res.status(200).json({message: 'Post created', post})
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    }

    async like(req, res, next) {
        const {
            id
        } = req.params;

        const {
            userId
        } = req.query;


        const post = await Post.findOne({where: {id}});

        if (post.likes.includes(+userId)) {
            return next(ApiError.badRequest('Like is exist'))
        }


        try {
            await Post.update({
                likes: [...post.likes, userId],
                dislikes: post.dislikes.filter(id => +id !== +userId)
            }, {
                where: {
                    id
                }
            })

            res.status(200).json({message: 'Post liked'})
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    }

    async dislike(req, res, next) {
        const {
            id
        } = req.params;

        const {
            userId
        } = req.query;

        const post = await Post.findOne({where: {id}});


        if (post.dislikes.includes(+userId)) {
            return next(ApiError.badRequest('Dislike is exist'))
        }


        try {
            await Post.update({
                dislikes: [...post.dislikes, userId],
                likes: [...post.likes.filter(id => +id !== +userId)]
            }, {
                where: {
                    id
                }
            })

            res.status(200).json({message: 'Post disliked'})
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    }

    async getOnePost(req, res, next) {
        const {id} = req.params;
        const {creator_type} = req.body;


        try {
            const post = await Post.findOne({
                where: {
                    id,
                    creator_type
                }
            })
            if (!post) {
                return next(ApiError.badRequest('Post doesn\'t exist'))
            }

            res.status(200).json({post})
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    }

    async getAll(req, res, next) {
        const {
            userId,
            type
        } = req.body;


        try {
            const posts = await Post.findAll();
            const filteredPosts = posts.filter(post => {
                return (+post.creatorId === +userId) && (post.creator_type === type);
            })

            res.status(200).json({posts: filteredPosts})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

    async delete(req, res, next) {
        const {id} = req.params;

        try {
            await Post.destroy({where: {id}});
            res.status(200).json({message: 'Post deleted'})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

    async redact(req, res, next) {
        const {id} = req.params;
        const {
            isNSFW,
            description,
        } = req.body;

        const {photo} = req.files;

        const fileName = uuid.v4() + '.jpg';
        photo.mv(path.resolve(__dirname, '..', 'static', fileName));


        try {
            await Post.update({
                isNSFW,
                description,
                photo: fileName
            }, {
                where: {
                    id
                }
            })

            res.status(200).json({message: 'Post updated'})
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

    async getStatistic(req, res, next) {
        const {id} = req.params;

        try {
            const post = await Post.findOne({where: {id}})
            const statistic = {
                likes: post.likes,
                dislikes: post.dislikes
            }

            res.status(200).json({statistic});
        } catch (e) {
            return next(ApiError.internal(e.message))
        }
    }

}

module.exports = new PostController()
