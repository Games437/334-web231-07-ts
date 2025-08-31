// 2. สร้างอาเรย์ employees: Employee[] กำหนดข้อมูลของพนักงานอย่างน้อย 3 คน
var employees = [
    { id: 1, name: "Somchai", position: "Manager", salary: 35000 },
    { id: 2, name: "Suda", position: "Developer", salary: 30000 },
    { id: 3, name: "Anan", position: "Designer", salary: 28000 }
];
// 3. เขียนฟังก์ชัน findEmployeeByName
function findEmployeeByName(name) {
    return employees.find(function (emp) { return emp.name.toLowerCase() === name.toLowerCase(); });
}
// 4. แสดงผลข้อมูลพนักงานทั้งหมด
console.log("\nข้อมูลพนักงานทั้งหมด:");
employees.forEach(function (emp) {
    console.log("ID: ".concat(emp.id, ", Name: ").concat(emp.name, ", Position: ").concat(emp.position, ", Salary: ").concat(emp.salary));
});
// 5. แสดงผลการค้นหาพนักงาน
var searchName = "Suda"; // เปลี่ยนชื่อที่ต้องการค้นหาได้
var foundEmployee = findEmployeeByName(searchName);
console.log("\nผลการค้นหาพนักงาน:");
if (foundEmployee) {
    console.log("ID: ".concat(foundEmployee.id, ", Name: ").concat(foundEmployee.name, ", Position: ").concat(foundEmployee.position, ", Salary: ").concat(foundEmployee.salary));
}
else {
    console.log("\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E0A\u0E37\u0E48\u0E2D ".concat(searchName));
}
