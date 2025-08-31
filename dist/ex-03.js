// ฟังก์ชัน: ลบสมาชิกตามชื่อ (ไทยหรืออังกฤษ)
function removeMember(name) {
    var q = name.trim().toLowerCase();
    var idx = BUS_MEMBERS.findIndex(function (m) {
        return m.nameTH.toLowerCase() === q || m.nameEN.toLowerCase() === q;
    });
    if (idx !== -1) {
        BUS_MEMBERS.splice(idx, 1);
        return true;
    }
    return false;
}
var BUS_MEMBERS = [
    { nameTH: "อลัน พศวีร์ ศรีอรุโณทัย", nameEN: "Alan", heightCm: 185, age: 23 },
    { nameTH: "มาร์ค กฤษณ์ กัญจนาทิพย์", nameEN: "Marckris", heightCm: 172, age: 22 },
    { nameTH: "ขุนพล ปองพล ปัญญามิตร", nameEN: "Khunpol", heightCm: 179, age: 22 },
    { nameTH: "ฮาร์ท ชุติวัฒน์ จันเคน", nameEN: "Heart", heightCm: 174, age: 22 },
    { nameTH: "จินวุค คิม", nameEN: "Jinwook", heightCm: 178, age: 21 },
    { nameTH: "ไทย ชญานนท์ ภาคฐิน", nameEN: "Thai", heightCm: 178, age: 20 },
    { nameTH: "เน็กซ์ ณัฐกิตติ์ แช่มดารา", nameEN: "Nex", heightCm: 180, age: 20 },
    { nameTH: "ภู ธัชชัย ลิ้มปัญญากุล", nameEN: "Phu", heightCm: 180, age: 20 },
    { nameTH: "คอปเปอร์ เดชาวัต พรเดชาพิพัฒ", nameEN: "Copper", heightCm: 173, age: 19 },
    { nameTH: "เอเอ อชิรกรณ์ สุวิทยะเสถียร", nameEN: "AA", heightCm: 178, age: 19 },
    { nameTH: "จั๋ง ธีร์ บุญเสริมสุวงศ์", nameEN: "Jungt", heightCm: 173, age: 19 },
    { nameTH: "ภีม วสุพล พรพนานุรักษ์", nameEN: "Peem", heightCm: 187, age: 19 }
];
// ฟังก์ชัน: เพิ่มสมาชิกคนใหม่เข้า array BUS_MEMBERS
function addMember(member) {
    BUS_MEMBERS.push(member);
}
// ฟังก์ชัน: ค้นหาตามชื่อ (ไทยหรืออังกฤษ)
function findByName(name) {
    var q = name.trim().toLowerCase();
    return BUS_MEMBERS.find(function (m) {
        return m.nameTH.toLowerCase() === q || m.nameEN.toLowerCase() === q;
    });
}
// ฟังก์ชัน: ค้นหาตามอายุ filter
function findByAge(age) {
    return BUS_MEMBERS.filter(function (m) { return m.age >= age; });
}
// -------------------------
// ตัวอย่างการใช้งาน
// -------------------------
console.log("สมาชิกทั้งหมด:");
BUS_MEMBERS.forEach(function (m) {
    console.log("- ".concat(m.nameTH, " (").concat(m.nameEN, "), \u0E2A\u0E39\u0E07 ").concat(m.heightCm, " \u0E0B\u0E21., \u0E2D\u0E32\u0E22\u0E38 ").concat(m.age, " \u0E1B\u0E35"));
});
// เพิ่มสมาชิกคนใหม่
addMember({ nameTH: "อรรถวิท", nameEN: "Attawit", heightCm: 160, age: 47 });
// ตัวอย่างการลบสมาชิก
var nameToRemove = "อรรถวิท";
if (removeMember(nameToRemove)) {
    console.log("\u0E25\u0E1A\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E0A\u0E37\u0E48\u0E2D ".concat(nameToRemove, " \u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08"));
}
else {
    console.log("\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E0A\u0E37\u0E48\u0E2D ".concat(nameToRemove));
}
console.log("สมาชิกหลังลบ:");
BUS_MEMBERS.forEach(function (m) {
    console.log("- ".concat(m.nameTH, " (").concat(m.nameEN, "), \u0E2A\u0E39\u0E07 ").concat(m.heightCm, " \u0E0B\u0E21., \u0E2D\u0E32\u0E22\u0E38 ").concat(m.age, " \u0E1B\u0E35"));
});
// ค้นหาชื่อ Joe
var memberJoe = findByName("Joe");
if (memberJoe) {
    console.log("\u0E1E\u0E1A\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E0A\u0E37\u0E48\u0E2D Joe: ".concat(memberJoe.nameTH, " (").concat(memberJoe.nameEN, ")"));
}
else {
    console.log("ไม่พบสมาชิกชื่อ Joe");
}
// ค้นหาตามอายุ
var membersByAge = findByAge(20);
console.log("สมาชิกที่มีอายุ 20 ปีขึ้นไป:");
membersByAge.forEach(function (m) {
    console.log("- ".concat(m.nameTH, " (").concat(m.nameEN, "), \u0E2A\u0E39\u0E07 ").concat(m.heightCm, " \u0E0B\u0E21., \u0E2D\u0E32\u0E22\u0E38 ").concat(m.age, " \u0E1B\u0E35"));
});
