const express = require('express')

const app = express()
const port = process.env.PORT || 3333

app.get('/', (req, res) => {
	res.json({ hello: 'World!' })
})

app.listen(port, () => console.log(`Port ${port} is open.`))
