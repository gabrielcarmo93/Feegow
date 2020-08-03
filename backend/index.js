const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3333

app.use(express.json())
app.use(cors())
app.use(require('./src/routes'))

app.listen(port, () => console.log(`Server is running on port ${port}`))
