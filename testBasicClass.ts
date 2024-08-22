class Person {
    firstName?: string;
    lastName?: string;
    // greet メソッドを追加
    greet() {
      console.log(`私は ${this.firstName} ${this.lastName} です。`);
    }
  }
  
  const taro = new Person();
  
  taro.firstName = "AWS";
  taro.lastName = "太郎";
  
  // greet メソッドを使用
  taro.greet();