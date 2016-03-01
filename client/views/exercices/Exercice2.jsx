'use strict';

var React = require('react');

var ArticleList = require('components/article/ArticleList.jsx');
// client/views/exercices/Exercice2.jsx
module.exports = React.createClass(
    {
        getInitialState: function() {
            return {
                articles : [
                    {title: 'title1', content: 'content1'},
                    {title: 'title2', content: 'content2'},
                    {title: 'title3', content: 'content3'},
                    {title: 'title4', content: 'content4'}
                ]
            };
        },
        render: function () {
            return <ArticleList articles={this.state.articles} />;
        }
    }
);