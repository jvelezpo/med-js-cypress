const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({
  static: './build'
})

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.use(
  jsonServer.rewriter({
    '/api/*': '/$1'
  })
)

// Use default router
server.use(router)
const listener = server.listen(3030, () => {
  console.log(`JSON Server is running at port ${listener.address().port}`)
})
