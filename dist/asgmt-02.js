// สร้างคลาส Course
var Course = /** @class */ (function () {
    function Course(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    return Course;
}());
// สร้างคลาส Student
var Student = /** @class */ (function () {
    function Student(studentID, name, courses) {
        if (courses === void 0) { courses = []; }
        this.studentID = studentID;
        this.name = name;
        this.courses = courses;
    }
    // เพิ่มรายวิชาใหม่เข้าไปใน Array
    Student.prototype.addCourse = function (course) {
        this.courses.push(course);
    };
    // คำนวณเกรดเฉลี่ยรวม
    Student.prototype.getAverage = function () {
        if (this.courses.length === 0)
            return 0;
        var total = this.courses.reduce(function (sum, c) { return sum + c.grade; }, 0);
        return total / this.courses.length;
    };
    return Student;
}());
// กำหนดข้อมูลนักศึกษา 3 คน คนละ 4 รายวิชา
var students = [
    new Student("1001", "Napat", [
        new Course("Math", 3.5),
        new Course("Physics", 3.0),
        new Course("English", 4.0),
        new Course("Programming", 3.7)
    ]),
    new Student("1002", "Ploy", [
        new Course("Math", 2.8),
        new Course("Physics", 3.2),
        new Course("English", 3.5),
        new Course("Programming", 3.9)
    ]),
    new Student("1003", "Krit", [
        new Course("Math", 3.9),
        new Course("Physics", 3.6),
        new Course("English", 3.2),
        new Course("Programming", 3.8)
    ])
];
// ฟังก์ชันแสดงผลข้อมูลนักศึกษา
function printStudents(students) {
    students.forEach(function (stu) {
        console.log("ID: ".concat(stu.studentID, ", Name: ").concat(stu.name));
        stu.courses.forEach(function (c) {
            console.log("   Course: ".concat(c.name, ", Grade: ").concat(c.grade));
        });
        console.log("   Average Grade: ".concat(stu.getAverage().toFixed(2)));
        console.log("----------------------");
    });
}
console.log("\nข้อมูลนักศึกษาทุกคน (ก่อนเพิ่มรายวิชา):");
printStudents(students);
// เพิ่มรายวิชาและเกรด คนละ 1 รายวิชา
if (students[0])
    students[0].addCourse(new Course("Art", 3.8));
if (students[1])
    students[1].addCourse(new Course("Biology", 3.6));
if (students[2])
    students[2].addCourse(new Course("History", 3.4));
console.log("\nข้อมูลนักศึกษาทุกคน (หลังเพิ่มรายวิชา):");
printStudents(students);
