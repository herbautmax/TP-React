'use strict';

var Fluxxor   = require('fluxxor');
var Constants = require('flux/actions/constants');

var Store = Fluxxor.createStore(
    {

        initialize: function () {
            this.articles = [];
            this.bindActions(
                Constants.ARTICLE.LOAD_ARTICLES, this.onLoadArticles
            );
        },

        onLoadArticles: function (payload) {
            this.articles = payload.articles;
            this.emit('change');
        }
    }
);

module.exports = Store;
