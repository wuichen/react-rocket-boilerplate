var Reflux = require('reflux');
var ExampleActions = require('../actions/ExampleActions');
var request = require('superagent');

var person = {
    "name": "Dr. Blaze Hane",
    "age": "30",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/picard102/128.jpg"
};
var ExampleStore = Reflux.createStore({
    listenables: [ExampleActions],
    init: function() {
        request
          .get('http://localhost:5000')
          .end(function(err, res) {
            if(res) {
                console.log(res);
            } else {
                console.log("noting");
            }
        })
    },
    onUpdateAge(){
        person.age = Math.random() * 100;
        this.trigger({person});
    },

    getInitialState() {
        return {person};
    }
});

module.exports = ExampleStore;