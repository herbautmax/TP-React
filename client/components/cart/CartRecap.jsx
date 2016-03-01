'use strict';

var React = require('react');

module.exports = React.createClass(
    {
        getDefaultProps: function () {
            return {
                articles: []
            };
        },
        render: function () {
            var total = this.props.articles
                .reduce(
                    function (t, article) {
                        return t + (+article.quantity * +article.unitPrice);
                    },
                    0
                )
                .toFixed(2);

            return (
                <div className='card'>
                    <div className='card-content'>
                        <span className='card-title'>Dans votre panier</span>
                        <p>
                            {
                                this.props.articles.length +
                                ' articles dans votre panier pour un total de : ' +
                                total +
                                ' €'
                            }
                        </p>
                    </div>
                </div>
            );
        }
    }
);