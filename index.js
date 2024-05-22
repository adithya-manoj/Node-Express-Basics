
let http = require('http')

http.createServer((req, res) => {

    if (req.url == '/web') {
    res.writeHead(200, {'Content-type':'text/html'})
        res.write('<h2>Web Page</h2>')
        res.end()
    }
    else if (req.url == '/login') {
    res.writeHead(200,{'Content-type':'text/html'})
    res.write('<h2>Login</h2>')
    res.end()
    }
    else if(req.url == '/signin'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h2>Sign In</h2>')
        res.end()

    }
}
).listen(8080)