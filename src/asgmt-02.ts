// สร้างคลาส Course
class Course {
    name: string;
    grade: number;
    constructor(name: string, grade: number) {
        this.name = name;
        this.grade = grade;
    }
}

// สร้างคลาส Student
class Student {
    studentID: string;
    name: string;
    courses: Course[];
    constructor(studentID: string, name: string, courses: Course[] = []) {
        this.studentID = studentID;
        this.name = name;
        this.courses = courses;
    }
    // เพิ่มรายวิชาใหม่เข้าไปใน Array
    addCourse(course: Course) {
        this.courses.push(course);
    }
    // คำนวณเกรดเฉลี่ยรวม
    getAverage(): number {
        if (this.courses.length === 0) return 0;
        const total = this.courses.reduce((sum, c) => sum + c.grade, 0);
        return total / this.courses.length;
    }
}

// กำหนดข้อมูลนักศึกษา 3 คน คนละ 4 รายวิชา
const students: Student[] = [
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
function printStudents(students: Student[]) {
    students.forEach(stu => {
        console.log(`ID: ${stu.studentID}, Name: ${stu.name}`);
        stu.courses.forEach(c => {
            console.log(`   Course: ${c.name}, Grade: ${c.grade}`);
        });
        console.log(`   Average Grade: ${stu.getAverage().toFixed(2)}`);
        console.log("----------------------");
    });
}

console.log("\nข้อมูลนักศึกษาทุกคน (ก่อนเพิ่มรายวิชา):");
printStudents(students);

// เพิ่มรายวิชาและเกรด คนละ 1 รายวิชา
if (students[0]) students[0].addCourse(new Course("Art", 3.8));
if (students[1]) students[1].addCourse(new Course("Biology", 3.6));
if (students[2]) students[2].addCourse(new Course("History", 3.4));

console.log("\nข้อมูลนักศึกษาทุกคน (หลังเพิ่มรายวิชา):");
printStudents(students);
