
var React         = require('react/addons');
var Link          = require('react-router').Link;
var DocumentTitle = require('react-document-title');
var Reflux = require('reflux');
var ExampleStore = require('../stores/ExampleStore');
var ExampleActions = require('../actions/ExampleActions');

var ExamplePage = React.createClass({

    mixins: [Reflux.connect(ExampleStore)],

    render() {
        var p = this.state.person;
        return (
        	<DocumentTitle title="Home">
	        	<section>

		            <h2>{p.name}</h2>
		            <h2 onClick={ExampleActions.updateAge}>{p.age}</h2>
		            <img src={p.avatar}/>
                    <div>
                        <Link to="Search">Search</Link>
                    </div>
	        	</section>

        	</DocumentTitle>

        );
    }
})

module.exports = ExamplePage;