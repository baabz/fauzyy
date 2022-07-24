let express = require('express')
let path = require('path')

let publicDir = path.join(__dirname,'../public')

let app = express()

app.use(express.static(publicDir))


app.get('/about', (req, res)=>{
    res.send('<h1>The Brain of all Engineers</h1>')
})

app.get('/weather', (req, res)=>{
    res.send({
        location: 'Kaduna',
        forecast:'its Raining'
    })
})

app.listen(3000,()=>{
    console.log('Server up and runing...');
})