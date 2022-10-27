const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const topics = require('./data/topics.json');
const details = require('./data/details.json');

app.get('/', (req, res)=>{
    res.send('ReactData API Running');
});

app.get('/topics', (req, res) =>{
    res.send(topics)
})

app.get('/details', (req, res) =>{
    res.send(details);
})

app.get('/details/:id', (req,res)=>{
    const id = req.params.id;
    const seleteDetail = details.find( d => d.id === id);
    res.send(seleteDetail);
    
})

app.listen(port, () => {
    console.log('CodEdu server running');
})