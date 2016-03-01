'use strict';

var React = require('react');

var Article    = require('components/article/Article.jsx');
// client/components/article/ArticleList.jsx
module.exports = React.createClass(
    {
        getDefaultProps: function () {
            return {
                articles: [],
                handleChangeQuantity: function() {
                }
            };
        },
        render: function () {
            return (
                <ul className='collection coding-dojo__collection'>
                    {
                        this.props.articles.map(
                            (article) => {
                                return (
                                    <li className='collection-item coding-dojo__collection-item'>
                                        <Article name={article.name}
                                                 quantity={article.quantity}
                                                 unitPrice={article.unitPrice}
                                                 handleChangeQuantity={this.props.handleChangeQuantity(article.id)}
                                        />
                                    </li>
                                );
                            }
                        )
                    }
                </ul>
            );
        }
    }
);