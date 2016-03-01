'use strict';

module.exports = {
    indexOfObj: function (array, property, value) {
        if (!array) {
            return -1;
        }
        for (var i = 0, l = array.length; i < l; i++) {
            if (array[i][property] === value) {
                return i;
            }
        }
    }
};