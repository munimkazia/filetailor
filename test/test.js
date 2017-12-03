var assert = require('assert');
var filetailor = require('../index');
var fs = require('fs');
var t;
describe('filetailor', function() {

    afterEach(function(){
        fs.unlinkSync('./test1.log');
        t.stop();
    });

    describe('filetailor()', function() {
        it('should not through exception when file exists', function(done) {
            fs.closeSync(fs.openSync('./test1.log', 'w'));
            var config = {
                "./test1.log" : []
            };
            t = filetailor(config);
            done();
        });

        it('should match a basic regex rule', function(done){
            fd = fs.openSync('./test1.log','w');
            var config = {
                "./test1.log" : [{
                    match: /hello/,
                    action: function(data) {
                        if(data == "hello munim"){
                            fs.closeSync(fd);
                            t.stop()
                            done();
                        } else {
                            fs.closeSync(fd);
                            t.stop();
                            done(new Error("Wrong line matched!"));
                        }
                    }
                }]
            };
            t = filetailor(config);
            fs.writeSync(fd, "hi munim\n");
            fs.writeSync(fd, "hello munim\n");
        });
    });
});