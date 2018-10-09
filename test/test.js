var expect = require('expect.js');
var studentClass = require('../src/student.js');

describe('Estudiante', function(){
    // Test 1
    describe('Carga de libreria', function(){
        it('Carga correcta de la libreria', function(){
            expect(studentClass).to.be.ok();
        })
    })

    describe('Crear usuario', function(){
        it('Devuelve un string como referencia del estudiante', function(){
            var student = new studentClass.Student('Gregorio', 14);
            expect(student.getName()).to.be("Gregorio");
        });
    });
    describe('Consultar edad', function(){
        it('Devuelve un string como referencia del estudiante', function(){
            var student = new studentClass.Student('Gregorio', 14);
            expect(student.getAge()).to.be(14);
        });
    });
});
