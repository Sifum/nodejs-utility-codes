console.info('---http client ping--');
console.info();

var http = require('http');
console.log('Now stat ping HTTP server...');
console.info();

var options ={
    host: 'localhost',
    port: 6868,
    path: '/'
};

function ping_server(){
    http.get(options, function(res){
        if(res.statusCode == 200){
            console.log('The site is up!');
        } else {
            console.log('The site is down!');
        }
    }).on('error', function(e){
        console.log('There was an error:' + e.message);
    });
}

setInterval(ping_server, 1000);

/*
---http client ping--

Now stat ping HTTP server...

The site is down!
The site is up!
The site is up!
The site is up!
The site is down!
The site is up!
The site is down!
The site is down!
The site is down!
.
.
.
 */