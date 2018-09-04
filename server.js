const express = require('express')
const app = express()

app.use(express.static('src'))

app.get("/", (request, response) => {
  response.sendFile(__dirname + '/src/mainPage.html')
})

const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
