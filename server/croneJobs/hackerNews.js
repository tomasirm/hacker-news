const cron = require("node-cron");
const hackerNewsService = require('../services/hackerNews');

function cronFunction (){
    cron.schedule("0 */1 * * *", function() {
        hackerNewsService.saveHackerNewsPosts();
    });
}

module.exports.cronFunction = cronFunction;