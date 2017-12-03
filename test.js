var filetailor = require('./index');

var configs = {
    "test.log" : [
    {
        match: /a/,
        action: function(data) { console.log("matched this!", data); }
    }
]
};

filetailor(configs);