const http = require('http');
const htmlparser = require('htmlparser2');
const auth = 'Basic ' + new Buffer('s203489:Cardoso1').toString('base64');
const url = 'www.fundamentus.com.br/resultado.php';
const options = {
    host: 'proxy3.trt18.jus.br',
    port: 80,
    method: 'GET',
    path: 'http://' + url,
    headers: {
        'Proxy-Authorization': auth,
        Host: url
    }
};
http.get(options, function(response) {
    // console.log(res);
    // res.pipe(process.stdout);
    parseResponse(response);
});

var parseResponse = function(response) {
    var data = '';
    response.on('data', function(chunk) {
        data += chunk;
    });
    var tags = [];
    var tagsCount = {};
    var tagsWithCount = [];

    response.on('end', function() {
        var parsedData = new htmlparser.Parser({
            onopentag: function(name) {
                if (tags.indexOf(name) === -1) {
                    tags.push(name);
                    tagsCount[name] = 1;
                } else {
                    tagsCount[name]++;
                }
            },
            onend: function() {
                for (var i = 1; i < tags.length; i++) {
                    tagsWithCount.push({ name: tags[i], count: tagsCount[tags[i]] });
                }
            }
        }, { decodeEntities: true });
        parsedData.write(data);
        parsedData.end();
        console.log(tagsWithCount);
    });
};
