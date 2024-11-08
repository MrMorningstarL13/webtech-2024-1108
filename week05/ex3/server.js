import express from 'express'

const app = express();

const port = 8080;

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})

app.get('/hello', (req, res)=>{
    res.send('hello get')
})

app.post('/hello', (req, res)=>{
    res.send('hello post')
})