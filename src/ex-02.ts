const students: string[] = ["พศวีร์", "มาร์คคริส", "ขุนพล", "ชุติวัฒน์", 
	"คิมจินวุค", "ชญานนท์", "ณัฐกิตติ์", "ภูธัชชัย",
	"เดชาวัต", "อชิรกรณ์", "จั๋งธีร์", "ภีมวสุ"
];

function listStudents(names: string[]): void {
    const result = names.map(n => `Student: ${n}`);
    result.forEach(line => console.log(line));
}

listStudents(students);
console.log("Total Students:", students.length);
