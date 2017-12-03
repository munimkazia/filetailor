var fs = require('fs');
var Tail = require('tail').Tail;

function processLine(data, actions) {
    for(i in actions) {
        action = actions[i];
        if(action.match.test(data)){
            action.action(data);
        }
    }
}
module.exports = function(configs) {
    var tails = [];
    for (file in configs) {
        var actions = configs[file];
        var tail = new Tail(file);
        tail.on("line", function(data) {
            processLine(data, actions);
        });

        tail.on("error", function(err) {
            console.log(err);
        });
        tails.push(tail);
    }
    return {
        stop: function(){
            for(i in tails){
                tails[i].unwatch();
            }
        }
    };

};