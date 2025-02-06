var student1 = {
    firstName: "Jhon",
    lastName: "Carmack",
    age: 54,
    location: "USA"
};
var student2 = {
    firstName: "Lars",
    lastName: "Bak",
    age: 60,
    location: "Danish"
};
var studentsList = [student1, student2];
console.log("Hello from ts");
globalThis.onload = function () {
    document.body.innerHTML = "\n<table>\n    <thead>\n        <tr>\n            <th>First Name</th>\n            <th>Location</th>\n        </tr>\n    </thead>\n    <tbody>\n            ".concat(studentsList.map(function (entry) { return "<tr><td>".concat(entry.firstName, "</td><td>").concat(entry.location, "</td></tr>"); }).join(''), "\n    </tbody>\n</table>");
};
