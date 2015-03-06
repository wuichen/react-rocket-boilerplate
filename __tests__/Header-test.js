/**
 * @jsx React.DOM
 */
'use strict';

jest.dontMock('../app/js/components/Header.js');

describe('Header', function() {

  var React = require('react/addons');
  var Header = require('../app/js/components/Header.js');
  var TestUtils = React.addons.TestUtils;
  var header;

  beforeEach(function() {
    // Render a header in the document
    header = TestUtils.renderIntoDocument(
      <Header />
    );
  });

  it('should exist', function() {
    // Verify that the header exists after being rendered
    expect(header.getDOMNode()).toBeDefined();
  });

  it('should contain the word \'Header\'', function() {
    // Verify that its text content is as expected
    expect(header.getDOMNode().textContent).toEqual('Header');
  });

});