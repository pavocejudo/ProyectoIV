const express   = require('express');
const body_parser = require('body-parser');
const Student     = require('./student.js');
const Teacher     = require('./teacher.js');

const app = express();

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json())

var myclass     = {};
var students    = [];
var teachers    = [];

app.get('/', (req, res) => {
   res.setHeader('Content-Type','application/json');
   res.send(JSON.stringify({'status':'ok'}));
})

app.get('/status', (req, res) => {
   res.setHeader('Content-Type', 'application/json');
   res.send(JSON.stringify({'status':'ok'}));
})

app.get('/student/all', (req,res) => {
    res.setHeader('Content-Type','application/json');
    res.send(JSON.stringify(students));
})

app.get('/teacher/all', (req,res) => {
    res.setHeader('Content-Type','application/json');
    res.send(JSON.stringify(teachers));
})


app.get('/subject/:name',(req, res) =>{
    subject_searched = myclass[req.params.name];
    res.setHeader('Content-Type','application/json');
    res.send(JSON.stringify(subject_searched));
})

app.post('/student/', (req, res)=>{
    var name = req.body.nombre;
    var age = req.body.edad;
    var subjects = req.body.asignaturas.split(",");

    student_post = new Student(name, age, subjects);

    if( student_post != undefined ){
        students.push(student_post);

        for (var i = 0; i < subjects.length; i++) {

            asignatura = subjects[i].trim()

            if( myclass.hasOwnProperty(asignatura) ) // Si existe la key, añadimos el alumno
                myclass[asignatura].push(student_post);
        }
        res.send(JSON.stringify({'status':'ok'}))
    }else{
        res.send(JSON.stringify({'status':'error'}))
    }
})

app.post('/teacher/', (req, res)=>{
    var name = req.body.nombre;
    var subjects = req.body.asignatura;

    teacher_post = new Teacher(name, subject);

    if( teacher_post != undefined ){
        teachers.push(teacher_post);
        myclass[teacher_post.getSubject()] = [];

        res.send(JSON.stringify({'status':'ok'}))
    }else{
        res.send(JSON.stringify({'status':'error'}))
    }

})

app.patch('/student/:id', (req, res)=>{
    var index = req.params.id;
    var edad = req.body.edad;
    var subject = req.body.asignatura;

    var setted = false;

    if( edad!= undefined ){
        students[index].setAge(edad);
        setted = true;
    }
    if( subject != undefined ){
        students[index].setSubjects(subject);
        setted = true;
    }

    if( setted )
        res.send(JSON.stringify({'status':'ok'}))
    else
        res.send(JSON.stringify({'status':'error'}))
})

// PORT :: port defined by the environment, otherwise 80
const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));
