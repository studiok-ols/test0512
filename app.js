const express = require('express')
const port = 80

const app = express()

app.get('/',(req,res) => {
    res.send('ddddddddd strona glowna')
})

app.get('/about',(req,res) => {
    res.send('about strona glowna')
})

app.listen(port)

/*
https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories
https://www.youtube.com/watch?v=9BXqpS0fK1s
*/