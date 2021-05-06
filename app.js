const express = require('express')
const app = express()
const cors = require('cors');
const port = 3003
app.use(cors())

const shopList = require('./controller/shoppingList')


app.use('/api', shopList);

app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})