const express = require('express')
const { set } = require('express/lib/application')
const app = express()

app.set('view engine', 'ejs')

app.use("/styles",express.static(__dirname + "/styles"));

app.get('/', (req, res) => {
    const projects = {
        title: 'test project',
        createdAt: Date.now(),
        description: 'test description'
    }
    res.render('index', {project: projects})
})

app.listen(5001)