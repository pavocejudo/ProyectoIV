/**
 * Clase para definir al alumno
 */

function Student(name, age){
     this.name = name;
     this.age = age;

     this.getName = function(){
         return this.name;
     }
     this.getAge = function(){
         return this.age;
     }
     this.getInfo = function(){
         return this.name + ", "+this.age+" years old";
     }
 }

module.exports = {
    Student
};
