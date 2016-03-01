'use strict';

var _ = require('lodash');

function LocalStorage(key) {
    this.key = key;
}

LocalStorage.prototype = {
    get: function () {
        return localStorage.getItem(this.key)
    },
    save: function (items) {
        localStorage.setItem(this.key, items);
        return items;
    },
    remove: function() {
        localStorage.clear(this.key);
    }

};


module.exports = function (key) {
    return new LocalStorage(key);
};