interface Profile {
    firstName: string;
    lastName: string;
  }
  
  // インターフェース Profile を継承し、BusinessProfile を定義
  interface BusinessProfile extends Profile {
    companyName: string;
  }
  
  const taroBiz: BusinessProfile = { firstName: "AWS", lastName: "太郎", companyName: "AnyCompany" };
  
  console.log(`私は ${taroBiz.lastName} です。${taroBiz.companyName} に勤めています。`);