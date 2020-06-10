'use strict';
const hackerNewsService = require('../services/hackerNews');

const getHackerNewsArticles = async (req, res) => {
    try {
        const response = await hackerNewsService.getHackerNewPosts();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

const initialPopulate = async (req, res) => {
    try {
        const response = await hackerNewsService.saveHackerNewsPosts();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

module.exports = {getHackerNewsArticles, initialPopulate};