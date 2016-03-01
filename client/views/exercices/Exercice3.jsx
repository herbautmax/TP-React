'use strict';

var React = require('react');
var Fluxxor = require('fluxxor');

// Mixins
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var ArticleList = require('components/article/ArticleList.jsx');
var CartRecap   = require('components/cart/CartRecap.jsx');

var CollectionUtils = require('utils/CollectionUtils');

// client/views/exercices/Exercice3.jsx
module.exports = React.createClass(
    {
        mixins : [
            FluxMixin,
            StoreWatchMixin('ArticleStore')
        ],
        getStateFromFlux: function() {
            var store = this.getFlux().store('ArticleStore');
            return {
                articles : store.articles
            };
        },

        componentWillMount: function() {
            this.getFlux().actions.articles.loadArticles();
        },

        handleClickAdd: function () {
            var articles = this.state.articles;
            articles.push(
                {
                    id: articles.length,
                    name: 'product' + (articles.length + 1),
                    unitPrice: (Math.random() * 100).toFixed(2),
                    quantity: 1
                }
            );
            // Inform that we change state and re-render if necessary
            this.setState({articles: articles});
        },
        handleChangeQuantity: function (id) {
            return ((event) => {
                var articles = this.state.articles,
                    index    = CollectionUtils.indexOfObj(articles, 'id', id);
                if (index > -1) {
                    articles[index].quantity = +event.target.value;
                    this.setState({articles: articles});
                }
            });
        },
        render: function () {
            return (
                <div className='row'>
                    <div className='col s8'>
                        <ArticleList articles={this.state.articles}
                                     handleChangeQuantity={this.handleChangeQuantity}/>
                        <button
                            className='btn waves-effect waves-light'
                            onClick={this.handleClickAdd}
                        >
                            Ajouter un article
                        </button>
                    </div>
                    <div className='col s4'>
                        <CartRecap articles={this.state.articles}/>
                    </div>
                </div>
            );
        }
    }
);