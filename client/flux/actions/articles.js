'use strict';

var DEFAULT_ARTICLES = require('constants/articles').DEFAULT_ARTICLES;
var STORAGE_KEY      = 'ARTICLES';
var ACTIONS          = require('flux/actions/constants');

var ArticleClient = require('utils/adapter/LocalStorage')(STORAGE_KEY);


module.exports = {
    articles: {
        loadArticles: function () {
            var articles = ArticleClient.get();
            if (!articles) {
                articles = ArticleClient.save(DEFAULT_ARTICLES);
            }
            this.dispatch(ACTIONS.ARTICLE.LOAD_ARTICLES, {articles: articles});
        }
    }
};