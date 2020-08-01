const express = require('express')
const app = express()
const port = process.env.PORT || 3333

app.use(express.json())
app.use(require('./src/routes'))

app.listen(port, () => console.log(`Server is running on port ${port}`))