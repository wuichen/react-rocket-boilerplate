'use strict';

var React         = require('react/addons');
var Router        = require('react-router');
var Route         = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute  = Router.DefaultRoute;

var App           = require('./App');
var HomePage      = require('./pages/HomePage');
var SearchPage    = require('./pages/SearchPage');
var NotFoundPage  = require('./pages/NotFoundPage');
var ExamplePage  = require('./pages/ExamplePage');


module.exports = (
  <Route handler={App} path='/'>

    <DefaultRoute handler={HomePage} />

    <Route name='Home' path='/' handler={HomePage} />
    <Route name='Search' path='/search' handler={SearchPage} />
    <Route name='Example' path='/example' handler={ExamplePage} />

    <NotFoundRoute handler={NotFoundPage} />

  </Route>
);