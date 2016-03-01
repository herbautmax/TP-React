'use strict';

var React      = require('react');
// client/components/article/Article.jsx
module.exports = React.createClass(
    {
        getDefaultProps: function () {
            return {
                name: 'Default name',
                unitPrice: 1,
                quantity: 1,
                handleChangeQuantity: function () {
                }
            };
        },
        render: function () {
            var price = (+this.props.quantity * +this.props.unitPrice).toFixed(2);
            return (
                <article className='coding-dojo__article row'>
                    <div className='col s8'>{this.props.name}</div>
                    <div className='col s2'>
                        {
                            this.props.handleChangeQuantity ?
                                <input type="number" onChange={this.props.handleChangeQuantity} value={this.props.quantity}/> :
                                this.props.quantity
                        }
                    </div>
                    <div className='col s2'>{price}€</div>
                </article>
            );
        }
    }
);