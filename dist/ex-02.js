var students = ["พศวีร์", "มาร์คคริส", "ขุนพล", "ชุติวัฒน์",
    "คิมจินวุค", "ชญานนท์", "ณัฐกิตติ์", "ภูธัชชัย",
    "เดชาวัต", "อชิรกรณ์", "จั๋งธีร์", "ภีมวสุ"
];
function listStudents(names) {
    var result = names.map(function (n) { return "Student: ".concat(n); });
    result.forEach(function (line) { return console.log(line); });
}
listStudents(students);
console.log("Total Students:", students.length);
