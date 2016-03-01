'use strict';

var React = require('react');

// Create flux and then registers actions and stores to it
var Fluxxor = require('fluxxor');

window.flux = window.flux || new Fluxxor.Flux({}, {});
if ('production' !== process.env.NODE_ENV) {
    window.flux.on(
        'dispatch', function (type, payload) {
            if (console && console.log) {
                console.log('[Dispatch]', type, payload);
            }
        }
    );
}

// Register Article actions
window.flux.addActions(require('flux/actions/articles.js'));
// Register Article store
var ArticleStore = require('flux/stores/ArticleStore.js');
window.flux.addStore('ArticleStore', new ArticleStore());


var Navbar = require('components/layout/nav/Nav.jsx');
var Footer = require('components/layout/footer/Footer.jsx');

var Exercice = require('views/exercices/Exercice3.jsx');
var App      = React.createClass(
    {
        render: function () {
            return (
                <div className='coding-dojo__main-container'>
                    <Navbar />
                    <main className='container'>
                        <Exercice flux={window.flux}/>
                    </main>
                    <Footer/>
                </div>
            );
        }
    }
);

React.render(<App />, document.getElementById('main'));