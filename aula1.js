var http = require('http');
var dia = require('./biblioteca');
http.createServer(function (req,res){
    res.writeHead(200, {'content-Type': 'text/html'});
    res.write("<h2> BRASIL 02 X 0 SERBIA</h2>");  
    res.write('<p style=color:pink>'+Date().substring(16,24)+'<br>');
    res.write(dia.diaDaSemana()+'<br>')
    res.end("___GANHAMOS ")
}).listen(3000)