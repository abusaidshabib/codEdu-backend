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



app.listen(port, () => {
    console.log('CodEdu server running');
})