'use strict';

var React = require('react');

var config = require('constants/navbar');

module.exports = React.createClass(
    {
        render: function () {
            return (
                <nav>
                    <div className='nav-wrapper'>
                        <a href='#' className='brand-logo center'>Coding Dojo</a>
                        <ul id='nav-mobile' className='left hide-on-med-and-down'>
                            {
                                config.map(
                                    function (link) {
                                        return (
                                            <li><a href={link.href}>{link.label}</a></li>
                                        );
                                    }
                                )
                            }
                        </ul>
                    </div>
                </nav>
            );
        }
    }
);