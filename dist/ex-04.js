// ฟังก์ชันกรองอาเรย์ของ object โดยเปรียบเทียบค่าของคีย์ที่ระบุ
// คืนค่า: อาเรย์ของ object ที่มีค่าของ key ตรงกับ value
// ใช้ Generics เพื่อให้รองรับ object ที่มีคีย์และค่าหลายแบบ
function filterByKeyEquals(items, key, value) {
    // T: ชนิดของ object ในอาเรย์
    // K: ชนิดของคีย์ที่ใช้กรอง (ต้องเป็นหนึ่งใน keyof T) เช่น "role", "category"
    // K extends keyof T: K ต้องเป็นหนึ่งในคีย์ของ T
    // items: อาเรย์ของ object ที่ต้องการกรอง
    // key: ชื่อคีย์ที่ต้องการกรอง (ต้องเป็นหนึ่งใน keyof T)
    // value: ค่าที่จะใช้เปรียบเทียบ (ชนิดตรงกับค่าของ key)
    return items.filter(function (item) { return item[key] === value; });
}
var employees = [
    { id: 1, name: "Alice", role: "dev" },
    { id: 2, name: "Bob", role: "designer" },
    { id: 3, name: "Charlie", role: "dev" },
];
// ใช้ฟังก์ชันกรองพนักงาน role = "dev"
var devs = filterByKeyEquals(employees, "role", "dev");
console.log("Employees (role=dev):", devs);
var products = [
    { id: 101, title: "UltraBook", category: "laptop" },
    { id: 102, title: "Pocket", category: "phone" },
];
// ใช้ฟังก์ชันกรองสินค้า category = "laptop"
var laptops = filterByKeyEquals(products, "category", "laptop");
console.log("Products (category=laptop):", laptops);
