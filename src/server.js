const express = require('express')
const routes = require('./routes')

const app = express()
const port = process.env.PORT || 3333

app.use(routes)

app.listen(port, () => console.log(`Port ${port} is open.`))
