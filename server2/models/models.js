const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    nickname: {type: DataTypes.STRING, unique: true},
    phone: {type: DataTypes.STRING, required: true},
    email: {type: DataTypes.STRING, required: true},
    password: {type: DataTypes.STRING},
    birthday: {type: DataTypes.BIGINT},
    country: {type: DataTypes.STRING},
    city: {type: DataTypes.STRING},
    avatar: {type: DataTypes.STRING},
    profile_description: {type: DataTypes.STRING},
});

const Gender = sequelize.define('gender', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING}
})

const UserSettings = sequelize.define('user_settings', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    nsfw: {type: DataTypes.BOOLEAN},
    politic: {type: DataTypes.BOOLEAN},
    language: {type: DataTypes.STRING},
    font_size: {type: DataTypes.STRING}
})

const Group = sequelize.define('group', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, unique: true},
    description: {type: DataTypes.STRING},
    bannerImg: {type: DataTypes.STRING},
    members_count: {type: DataTypes.INTEGER, require: false, default: 0},
})

const GroupSettings = sequelize.define('group_settings', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
})

//

const UserGroup = sequelize.define('user_group', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    mutated_duration: {type: DataTypes.INTEGER, require: false, default: 0},
    banned_duration: {type: DataTypes.INTEGER, require: false, default: 0},
})

const UserPermissions = sequelize.define('user_permissions', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    user_group_name: {type: DataTypes.STRING},
    delete_post: {type: DataTypes.BOOLEAN},
    edit_post: {type: DataTypes.BOOLEAN},
    kick_user: {type: DataTypes.BOOLEAN},
    edit_group_info: {type: DataTypes.BOOLEAN},
    edit_group_settings: {type: DataTypes.BOOLEAN},
    set_group: {type: DataTypes.BOOLEAN}
})

//

const Post = sequelize.define('post', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    description: {type: DataTypes.STRING},
    title: {type: DataTypes.STRING},
    isNSFW: {type: DataTypes.BOOLEAN},
    photo: {type: DataTypes.STRING, required: false},
    creator_type: {type: DataTypes.STRING, required: true, default: 'user'},
    creatorId: {type: DataTypes.INTEGER, required: true},
    likes: {type: DataTypes.ARRAY(DataTypes.INTEGER), default: []},
    dislikes: {type: DataTypes.ARRAY(DataTypes.INTEGER), default: []}
})

const PostThread = sequelize.define('post_thread', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
})

const PostComment = sequelize.define('post_comment', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    text: {type: DataTypes.STRING},
    likes: {type: DataTypes.ARRAY(DataTypes.INTEGER)},
    dislikes: {type: DataTypes.ARRAY(DataTypes.INTEGER)},
    date: {type: DataTypes.INTEGER},
    parentId: {type: DataTypes.INTEGER}
})

//

const UserAction = sequelize.define('user_action', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    targetId: {type: DataTypes.INTEGER},
    action_type: {type: DataTypes.STRING}
})

const Inbox = sequelize.define('inbox', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    isRead: {type: DataTypes.BOOLEAN, default: false},
    content: {type: DataTypes.STRING},
    type: {type: DataTypes.STRING},
    userId: {type: DataTypes.INTEGER}
})


Gender.hasMany(User);
User.belongsTo(Gender);

Inbox.hasMany(User);
User.belongsTo(Inbox);

UserSettings.hasMany(User);
User.belongsTo(UserSettings);

UserGroup.hasMany(UserPermissions);
UserPermissions.belongsTo(UserGroup);

Group.hasMany(GroupSettings);
GroupSettings.belongsTo(Group);

User.belongsToMany(Group, {through: UserGroup});
Group.belongsToMany(User, {through: UserGroup});

Post.hasMany(PostThread);
PostThread.belongsTo(Post);

PostThread.hasMany(PostComment);
PostComment.belongsTo(PostThread);

Post.hasMany(UserAction);
UserAction.belongsTo(Post);

User.hasMany(UserAction);
UserAction.belongsTo(User);

module.exports = {
    User,
    Gender,
    UserSettings,
    Group,
    GroupSettings,
    UserGroup,
    UserPermissions,
    Post,
    PostThread,
    PostComment,
    UserAction,
    Inbox
}
