'use strict';

var React = require('react');

var Article = require('components/article/Article.jsx');

module.exports = React.createClass(
    {
        render: function () {
            return (
                <Article title='Votre premier composant' content='Hello world !' />
            );
        }
    }
);