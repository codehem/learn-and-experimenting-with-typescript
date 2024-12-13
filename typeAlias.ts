type Staff = {
    firstName: string;
    lastName: string;
    jobTitle?: string;
};

const staff: Staff = { firstName: "AWS", lastName: "太郎", jobTitle: "インフラエンジニア" };
const boss: Staff = { firstName: "Amazon", lastName: "次郎" };

console.log(`${staff.firstName} ${staff.lastName} の役職は ${staff.jobTitle} で、上司は ${boss.firstName} ${boss.lastName} です。`);