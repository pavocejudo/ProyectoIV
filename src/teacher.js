/**
 * Clase para definir al profesor
 */

 function Teacher(name, subject){
     this.name = name;
     this.subject = subject;

     this.getName = function(){
         return this.name;
     };
     this.getSubject = function(){
         return this.subject;
     };
     this.getInfo = function(){
         return this.name + ", teaching in "+this.subject;
     };
     this.toJson = function(){
         return JSON.stringify(
             {'status':'ok',
              'teacher':{
                  'name':this.name,
                  'subject':this.subject
              }
          });
     };
 };
 module.exports = Teacher;
