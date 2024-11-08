import express from 'express'

const app = express();
app.use(express.static('public'))
app.use(express.json())
//app.use applies to everything

const port = 8080;

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})

const cats = []
let currentCatId=1;

app.get('/cats', (req, res) => {
    res.status(200).json(cats)
    console.log(currentCatId)
})

app.get('/cats/:id', (req, res) => {

})

app.post('/cats', (req, res)=>{
    let newCat = req.body
    newCat.id = currentCatId++
    cats.push(newCat)
    res.status(201).json(newCat)
})

app.put('/cats/:id', (req,res)=>{

})

app.delete('/cats/:id', (req, res) => {

})