/**
 * Clase para definir al alumno
 */

function Student(name, age, subjects){
     this.name = name;
     this.age = age;
     this.subjects = subjects;

     this.getName = function(){
         return this.name;
     };
     this.getAge = function(){
         return this.age;
     };
     this.getInfo = function(){
         return this.name + ", "+this.age+" years old";
     };
     this.getSubject = function(){
         return this.subjects;
     };

     this.toJson = function(){
         return JSON.stringify(
             {'status':'ok',
              'student':{
                  'name':this.name,
                  'age':this.age,
                  'subjects':this.subjects,
              }
          });
     };
 };

module.exports = Student;
