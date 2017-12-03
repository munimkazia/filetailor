# filetailor
A simple file tailor

This simple npm package allows you to tail files and perform actions based on matched patterns. 

Example:

```
var filetailor = require('filetailor');

var config = {
    "test.log" : [
    {
        match: /ERROR/,
        action: function(data) { console.log("Got error!", data); }
    }
]
};

filetailor(config);
```
To Do:
* Write tests
* Add simple URL actions to post matched data
* Write own file tailing code which does better error handling
* Add action thresholds
* Add CLI version with JSON config