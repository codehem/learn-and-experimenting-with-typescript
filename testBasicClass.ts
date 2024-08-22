class Person {
    firstName: string;
    lastName: string;
    constructor(firstName = "AWS", lastName = "太郎") {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    greet() {
      console.log(`私は${this.lastName} ${this.firstName}です。`);
    }
  }
  
  // Person クラスを継承した Teacher クラスを定義。
  class Teacher extends Person {
    // 独自のプロパティとして、Subject を追加します。
    subject: string;
    constructor(subject: string, firstName = "AWS", lastName = "太郎") {
      // 継承先のコンストラクタでは、プロパティ( this.xxx )にアクセスする前に super() を呼ぶ必要があります。
      super(firstName, lastName); //親クラスのコンストラクタを呼び出し
      this.subject = subject;
    }
    // greet メソッドを Teacher 独自のものに書き換えます。
    greet() {
      console.log(`私は ${this.firstName} ${this.lastName} です。${this.subject} の先生をやっています。`);
    }
  }
  
  // subject を Teacher クラスに渡し、オブジェクトを初期化します。
  const taro = new Teacher("国語");
  const yama = new Teacher("ha");
  
  taro.greet();
  yama.greet();