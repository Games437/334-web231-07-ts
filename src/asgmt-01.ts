// 1. ประกาศ Employee เป็น Interface
interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}

// 2. สร้างอาเรย์ employees: Employee[] กำหนดข้อมูลของพนักงานอย่างน้อย 3 คน
const employees: Employee[] = [
    { id: 1, name: "Somchai", position: "Manager", salary: 35000 },
    { id: 2, name: "Suda", position: "Developer", salary: 30000 },
    { id: 3, name: "Anan", position: "Designer", salary: 28000 }
];

// 3. เขียนฟังก์ชัน findEmployeeByName
function findEmployeeByName(name: string): Employee | undefined {
    return employees.find(emp => emp.name.toLowerCase() === name.toLowerCase());
}

// 4. แสดงผลข้อมูลพนักงานทั้งหมด
console.log("\nข้อมูลพนักงานทั้งหมด:");
employees.forEach(emp => {
    console.log(`ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: ${emp.salary}`);
});

// 5. แสดงผลการค้นหาพนักงาน
const searchName = "Suda"; // เปลี่ยนชื่อที่ต้องการค้นหาได้
const foundEmployee = findEmployeeByName(searchName);
console.log("\nผลการค้นหาพนักงาน:");
if (foundEmployee) {
    console.log(`ID: ${foundEmployee.id}, Name: ${foundEmployee.name}, Position: ${foundEmployee.position}, Salary: ${foundEmployee.salary}`);
} else {
    console.log(`ไม่พบพนักงานชื่อ ${searchName}`);
}