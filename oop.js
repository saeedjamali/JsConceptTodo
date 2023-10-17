//? ProtoType
//* arr.filter : مثلا اينجا فيلتر يك پروتوتايپ ارايه هست.
//TODO arr=> Array => Object
//TODO obj=> Object
//TODO str => String => Object

//? Method in Object
//! False : not use method inline object

function CreateCourse(title, price, discount) {
  this.title = title;
  this.price = price;
  this.discount = discount;
  this.calcOfPrice = function () {
    return price * (1 - dicount / 100);
  };
}

const course = new CreateCourse("Next.Js", 100, 10);

//* Truthy : Use Prototype (Functional)
//TODO the way of add method to prototype
function CreateCourse1(title, price, discount) {
  this.title = title;
  this.price = price;
  this.discount = discount;
}
CreateCourse1.prototype.calcOfPrice = function () {
  return this.price * (1 - this.discount / 100);
};

CreateCourse1.prototype.courseDetail = function () {
  console.log(this);
  return `the course name is ${this.title}`;
};

const course1 = new CreateCourse1("Next.Js", 100010000, 10);
console.log(course1.calcOfPrice());
console.log(course1.courseDetail());

//* True Truthy : Use Class : Convert Construtor function to Class

class Course {
  constructor(title, price, discount) {
    this.title = title;
    this.price = price;
    this.discount = discount;
  }

  calcOfPrice() {
    return this.price * (1 - this.discount / 100);
  }

  courseDetail() {
    console.log(this);
    return `the course name is ${this.title}`;
  }
}

const courseCl = new Course("NodeJs", 1000, 40);
console.log(courseCl.courseDetail());

//? Accessor Property : Setter and Getter : set fff(){} , get fff(){}

//* getter :this method start with get keyword :  Not arguman input

const user = {
  name: "saeed",
  id: 32896599,
  birthDate: 20,
  get getAge() {
    return 100 - this.birthDate;
  },
  set setAge(age) {
    this.birthDate = age;
  },
};
user.setAge = 65;
console.log("Age : ", user.getAge);

//? Static Method : methods that not add to prototype class and hidden out of class // just access inline class

//? Static Method : متد هايي هستند كه مختص همان كلاس خستند و از بيرون قابل دسترسي نيستند

//? Static Method : پس گفتيم آبچكت هايي كه ما از كلاس مي سازيم به اين متد دسترسي ندارد ولي با نام خود كلاس ميتوانيم به متد دسترسي داشته باشيم

class Article {
  static publisher = "Hindi";
  constructor(title) {
    this.title = title;
  }

  static testMethod() {
    console.log("Static Method");
  }

  static compare(article1, article2) {
    return console.log(article1.title == article2.title);
  }
}

const article = new Article("NodeJs");
const articles = [new Article("NodeJs"), new Article("NextJs")];
//article.testMethod(); //! Error
Article.testMethod(articles);

//? Static :  helper - Utils - database related (search,delete ...)

//TODO  Objects may contain property and methods in one pack(one block)

//* Class ~~~ create Object
//* 4 Principle of OOP
//? 1-Abstraction : ignore or hide detail , show essential,reduce complexity,Map,addEventlistener

//? 2-Encapsulation : private properties and methods
//? 3-Inheritance : Child class extends parent class , making all prperties and methods extendable , reuse common logic

//? 4-Polymorphism : Many Shapes , A child class can overwrite a methods inherited from a parent class

//TODO Inheritance / Polymorphism

class User {
  constructor(obj) {
    //? We Can pass obj
    const { name, age } = obj; //? Object destructuring
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi ${this.name}`;
  }
}

class Admin extends User {
  //?inheritance

  numOfUsers = 0; //* Public field
  #permission = 1;
  #role;
  constructor(obj) {
    const { name, age, role } = obj;
    super({ name, age }); //? call the parent constructor => this
    //* parent constructor input parameter is object
    this.#role = role;
  }

  introduce() {
    return `The role is ${this.name} - ${this.role}`;
  }

  greet() {
    //? Polymorphism
    return `Hello ${this.name}`;
  }
}

const admin = new Admin({ name: "saeed", age: 32, role: "SUPERVISOR" });
console.log(admin.greet());

//? Protected property and method ;convention between programming ; use _ before prop or method

//? Private Method and property : Encapsulation : use # before field : access inline class

//? Public field : all instance access this filed
