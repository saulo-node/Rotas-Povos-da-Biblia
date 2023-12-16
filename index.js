const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.write('Bible stories\n')
    if (req.url == '/babilonios') {
        res.write('Habavlim omdim litkof et hasabaim')
    } else if (req.url == '/sabeus') {
        res.write('Hasabaim amdu litkof et bet Yov')
    }
    res.end()
})


server.listen(port, () => {console.log('Running...')})