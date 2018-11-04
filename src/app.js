const express   = require('express');
const alumn     = require('./student.js');
const teacher     = require('./teacher.js');

const app = express();

app.get('/', (req, res) => {
   res.send('{"status":"OK"}');
})

app.get('/student/all', (req,res) => {
    res.send('{ok}');
})


app.get('/student/:dni',(req, res) =>{
    res.send('{ok}');
})

// PORT :: port defined by the environment, otherwise 80
const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));
