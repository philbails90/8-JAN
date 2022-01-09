const express = require('express')
const { set } = require('express/lib/application')
const app = express()

app.set('view engine', 'ejs')

app.use("/styles",express.static(__dirname + "/styles"))
app.use("/images",express.static(__dirname + "/images"))


app.get('/', (req, res) => {
    const projects = [{
        title: 'test project',
        createdAt: Date.now(),
        description: 'test description',
        image: 'image1.png'
    },
        {
        title: 'test project2',
        createdAt: Date.now(),
        description: 'test description',
        image: 'image1.png'
    },
        {
        title: 'test project3',
        createdAt: Date.now(),
        description: 'test description',
        image: 'image1.png'
        }
    ]
    res.render('index', {projects: projects})
})

app.listen(5001)