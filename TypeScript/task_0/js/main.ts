interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: "Jhon",
    lastName: "Carmack",
    age: 54,
    location: "USA"
};

const student2: Student = {
    firstName: "Lars",
    lastName: "Bak",
    age: 60,
    location: "Danish"
};

const studentsList: Student[] = [student1, student2];

console.log("Hello from ts");

globalThis.onload = function() {
    document.body.innerHTML = `
<table>
    <thead>
        <tr>
            <th>First Name</th>
            <th>Location</th>
        </tr>
    </thead>
    <tbody>
            ${studentsList.map((entry) => `<tr><td>${entry.firstName}</td><td>${entry.location}</td></tr>`).join('')}
    </tbody>
</table>`;
};