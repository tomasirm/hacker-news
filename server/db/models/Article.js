const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    created_at: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: false
    },
    comment_text: {
        type: String,
        required: false
    },
    story_id: {
        type: Number,
        required: false
    },
    story_title: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    objectID: {
        type: Number,
        required: false
    },
    story_url: {
        type: String,
        required: false
    }

});

module.exports = mongoose.model('Article', ArticleSchema);