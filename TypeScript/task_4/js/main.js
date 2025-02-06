"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
var cpp = new Subjects.Cpp();
exports.cpp = cpp;
var java = new Subjects.Java();
exports.java = java;
var react = new Subjects.React();
exports.react = react;
var cTeacher = {
    firstName: 'Pablo',
    lastName: 'Escobar',
    experienceTeachingC: 10,
};
exports.cTeacher = cTeacher;
console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
