'use strict';

var KEY = 'ARTICLE';

var _       = require('lodash');
var adapter = require('utils/adapter/LocalStorage')(KEY);

module.exports = {
    get: function () {
        return adapter.get();
    },
    save: function (article) {
        return adapter.save(article);
    },
    remove: function (article) {
        return adapter.remove(article);
    }
};