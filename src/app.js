const express   = require('express');
const Student     = require('./student.js');
const Teacher     = require('./teacher.js');

const app = express();

let student1 = new Student("Sergio", "24", ["Maths", "IV"]);
let student2 = new Student("Manuel", "20", ["English", "IV"]);

const teacher1 = new Teacher("JJ", "IV");
const teacher2 = new Teacher("Rocio", "English");


let myclass={};
myclass[teacher1.getSubject()]=[];
myclass[teacher1.getSubject()].push(student1);
myclass[teacher1.getSubject()].push(student2);
myclass[teacher2.getSubject()]=[];
myclass[teacher2.getSubject()].push(student2);



app.get('/', (req, res) => {
   res.setHeader('Content-Type','application/json');
   res.send(JSON.stringify({'status':'ok'}));
})

app.get('/student/all', (req,res) => {
    res.setHeader('Content-Type','application/json');
    res.send(JSON.stringify(myclass));
})

app.get('/subject/:name',(req, res) =>{
    subject_searched = myclass[req.params.name];
    res.setHeader('Content-Type','application/json');
    res.send(JSON.stringify(subject_searched));
})

// PORT :: port defined by the environment, otherwise 80
const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));
