const http = require('http')

const server = http.createServer((req, res)=>{
    //console.log(req)
    //res.write('welcome to our home page')
    if (req.url === '/'){
    res.end('Welcome to our home page')
    return
}
    if (req.url==='/about'){
    res.end('This is our short history')
    return
}
    res.end(`
        <h1>Ooops!!!</h1>
        <p>We can not find what you are looking for</p>
        <a href="/">Go back home</a> 
    `)
})

server.listen(5000)