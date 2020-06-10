const fetch = require("node-fetch");
const Article = require('../db/models/Article')
const HACKER_NEWS_URL = 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs';

async function saveHackerNewsPosts() {
    let data;
    try {
        const response = await fetch(HACKER_NEWS_URL);
        data = await response.json()
    } catch (error) {
        console.log(error);
    }
    let deleteResponse;
    let savePost;

    deleteResponse = await deleteAllData();
    console.log(deleteResponse);
    for (const article_ of data.hits) {
        try {
            const article = new Article({
                created_at: article_.created_at,
                author: article_.author,
                comment_text: article_.comment_text,
                story_id: article_.story_id,
                story_title: article_.story_title,
                objectID: article_.objectID,
                story_url: article_.story_url,
                title: article_.title
            });
            savePost = await article.save();
        } catch (e) {
            console.log(e);
        }
    }
    return data.hits;
}

async function getHackerNewPosts() {
    const articles = await Article.find();
    return articles;
}

async function deleteAllData() {
    try {
        return await Article.deleteMany({});
    } catch (e) {
        console.log(e);
    }
}

module.exports = {saveHackerNewsPosts, getHackerNewPosts, deleteAllData};
