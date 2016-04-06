var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/main.js'));
app.use(express.static(__dirname + '/main.css'));

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/public/index.htm');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});