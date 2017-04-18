// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORT = 7000;

var PORT2 = 7500;

function handleRequest(request, response) {

    // The below statement is triggered (client-side) when the user visits the PORT URL
    response.end("You're the best!!" + request.url);
    response.end("Stay motivated!" + request.url);
    response.end("Nothing stands in your way!" + request.url);
}

function handleRequest2(request, response) {

    // The below statement is triggered (client-side) when the user visits the PORT URL
    response.end("Stop procrastinating!" + request.url);
    response.end("Avoid the distractions" + request.url);
    response.end("You give up so easily" + request.url);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Here we start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

    // The below statement is triggered (server-side) when a user visits the PORT URL
    console.log("Server listening on: http://localhost:%s", PORT);

});

var server2 = http.createServer(handleRequest2);

// Here we start our server so that it can begin listening to client requests.
server.listen(PORT2, function() {

    // The below statement is triggered (server-side) when a user visits the PORT URL
    console.log("Server listening on: http://localhost:%s", PORT);

});

