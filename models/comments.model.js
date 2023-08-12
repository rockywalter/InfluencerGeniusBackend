const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    influencer_id: { type: Number, required: true },
    comment: { type: String, required: true },
    sentiment: { type: Number, required: true },
},{
    versionKey: false,
    collection: 'comments',
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;