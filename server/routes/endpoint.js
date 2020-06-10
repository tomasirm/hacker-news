const express = require("express");
const router = express.Router();
const endpointController = require('../controllers/endpoint');

router.get("/hackerNewsPosts", endpointController.getHackerNewsArticles);
router.get("/initialPopulate", endpointController.initialPopulate);

module.exports = router;