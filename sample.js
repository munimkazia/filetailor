var filetailor = require('./index');
var fs = require('fs');

var configs = {
    "test.log" : [
    {
        match: /a/,
        action: function(data) { console.log("matched this!", data); }
    }
]
};

tailor = filetailor(configs);