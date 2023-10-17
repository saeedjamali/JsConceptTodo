const course = {
  title: "JAVAScript",
  price: 1800,
  discount: 20,
  calcOffPrice: function () {
    return this.price * (1 - this.discount / 100);
  },
};

// console.log(course.calcOffPrice());

// !!Create Object

//* 1-Factory
function createCourse(title, price, discount) {
  return {
    title,
    price,
    discount,
    calcOffPrice: function () {
      return this.price * (1 - this.discount / 100);
    },
  };
}

// console.log(createCourse("NodeJs",1900,10).calcOffPrice() );

//* 2-Constructore
function CreateCourse(title, price, discount) {
  this.title = title;
  this.price = price;
  this.discount = discount;
  this.calcOffPrice = function () {
    return price * (1 - discount / 100);
  };
}

// const course1 = new CreateCourse("NextJs",1500,50);
// console.log('course1.calcOffPrice() :>> ', course1.calcOffPrice());

const a = 20;
let b = a;
b = 100;
// console.log('a :>> ', a);
// console.log('b :>> ', b);

//! COPY OBJECT

const number = {
  age: 30,
  course: ["a", "bbbbbbbb", "c"],
};

const copiedNumber = number;
copiedNumber.age = 180;
copiedNumber.course.push("d");
console.log("number  :>> ", number);
console.log("copiedNumber  :>> ", copiedNumber);

//* 1-Shallow Copy    VS    Deep Copy
const shallowCopy = Object.assign(number);
shallowCopy.age = 1500;
shallowCopy.course.push(20);
console.log("shallowCopy  :>> ", shallowCopy);

//* 2-Deep Copy
const deepCopy = JSON.parse(JSON.stringify(number));
deepCopy.course.push(55);
console.log("deepCopy  :>> ", deepCopy);

//! OBJECT Destructuring
const { course: courseNumber, age } = number;
console.log("courseNumber :>> ", courseNumber);
console.log("courseNumber :>> ", age);
//! defualt value
const { course: courseNumber1 = ["ali", "hasan"] } = number;

//! TEMPLATE Literal
console.log(
  "Template Literal  :>> ",
  ` Hello Template Literal World .... ${courseNumber1[1]}`
);

//! Array Destructure
const [a1, , b1] = number.course; // a1 = number.course[0] ;  b1=number.course[2]
console.log("a1 :>> ", a1);

//! Spread Operator
const arr = [1, 2, 3, 4];
const arr2 = [10, 11, ...arr];
console.log("arr2 :>> ", arr2);

const arr3 = [...arr]; //Shallow Copy

//! Rest Operator

//Array
const restArr = [1, 2, 3, 45, 5];
const [Array, ...restArr2] = restArr; // restArr2 =[2,3,45,5]
console.log("restArr2 :>> ", restArr2);

const tag1 = ["React.Js", "Vue.Js"];
const tag2 = ["Next.Js", "Nuxt.Js"];
const spreadTag = [...tag1, ...tag2];
console.log("tagCopy", spreadTag);
const [firstItem, ...restTag] = spreadTag;
console.log("restTag", restTag);

//Object
const objRest = {
  name: "saeed",
  id: 1,
  age: 32,
};

const { name: lastName, ...otherObjRest } = objRest;
console.log("otherObjRest", otherObjRest);

//! Rest Operator in Function
function getTotalPrice(discount, prices) {
  sumPrice = 0;
  for (const iterator of prices) {
    sumPrice += iterator;
  }
  console.log("TotalPrice :>", sumPrice * (1 - discount / 100));
}

getTotalPrice(25, [10, 20, 30, 40, 50, 60, 70]);

//! Set : iterable Data : array ,string
//* Remove Repeat
//* Unique Value
const set = new Set([1, 1, 2, 2, 3, 4, 55, 55, 6]);
console.log("set", set); //[ 1, 2, 3, 4, 55, 6 ]

const roles = ["ADMIN", "ADMIN", "OPERATOR", "SUPERVISIOR", "USER", "ADMIN"];
const uniqueRoles = new Set(roles);
console.log("uniqueRoles", uniqueRoles.size);




//! Example MAP DataType ......
// Map vs Object : in map key can get object or other value 

const john = { name: 'John Doe' }, lily = { name: 'Lily Bush' }, peter = { name: 'peter solberg' };
const roleUser = new Map();
roleUser.set(john, "ADMIN").set(lily, "SUPERVISOR").set(peter, "USERS");
console.log('roleUser :>> ', roleUser);

for (const iterator of roleUser.keys()) {
  console.log('iterator :>> ', iterator.name);
  // iterator :>>  John Doe     iterator :>>  Lily Bush     iterator :>>  peter solberg
}




//! Array Of Object 
const users = [
  { name: "ali", age: 23 },
  { name: "alireza", age: 61 },
  { name: "vahid", age: 54 },
  { name: "mostafa", age: 32 },
]


for (const iterator of users) {
  console.log('iterator :>> ', iterator.age);
}



//! Scope : where variable can be accessed

//* Scope : Global , function(local) , Block 

//? Let And Const  : Block Scope
//? Var  : Function Scope ???!!!!


//! Default Parameter

function calculateOffPrice(arr, discount = 30) {
  let sumPrice = 0;
  for (const iterator of arr) {
    sumPrice += iterator;
  }
  return sumPrice * (1 - discount / 100);
}

console.log('calculateOffPrice :>> ', calculateOffPrice([100, 1000, 2000]));


//! FirstClass Function
//* First Class : functions are trwated like any other Variable  : تابعی که میتوان مقدار بازگشتیشون درون یک متغیر ریخت
//* High Order Function(HOF)  : توابعی که یک تابع را بعنوان ورودی دریافت میکنند یا خروجی آنها یک تابع است   => Abstraction(OOP) 
//?      ....           : const myFun = function (fun){ rerutn fun;}


//! CallBack Function : تابعی که بعنوان یک آرگومان به تابع دیگر پاس داده می شود.
//*      ....           : const myFun = function (fun){ rerutn ;}   fun : CallBack Function


//.............................
//? 1-  Func() ; این یعنی فراخوانی تابع
//? 2-  Func :  این حالت فقط آدرس تابع رو ما پاس میدیم 
//? زمانی که یک تابع رو میخام بعنوان آرگومان یا پارامتر ورودی یک تابع پاس بدیم از حالت دوم استفاده میکنیم
//? sayHi(func){}
//? sayHi(func);



//! HOF Usage
function addItem(...arr11) {
  let arr22 = [];
  for (let iterator of arr11) {
    iterator += 2
    arr22.push(iterator);
  }
  // console.log('arr2 :>> ', arr2);
  return arr22;
}

//  console.log('Arr2 :>> ', addItem(1,2,3,4,5));



function decArray(a, b) {
  return a - b;
}

function incArray(a, b) {
  return a + b;
}


function opItem(arr, num, fn) {
  let arr22 = [];
  for (let iterator of arr) {
    arr22.push(fn(iterator, num));
  }
  // console.log('arr2 :>> ', arr2);
  return arr22;
}
console.log('Arr2 :>> ', opItem([2, 3, 4, 5, 6, 7], 3, decArray));


//! this : Object that call the method ....

//!  Call , Apply , Bind method

//* 1- To Borrow another object's method  
//* 2- To create a custom value of  THIS
const offer1 = {
  name: "Jashnvare",
  off: 25,
  price: 2500,
  getPrice: function (str) {
    console.log('this :>> ', this);
    return this.price * (1 - this.off / 100) + ` : Welcome ${str}`
  },

  getMessage: function (name, getPrice) {
    return `Hi ${name} welcome to Price ${getPrice}`
  }
}

const offer2 = {
  name: "Eidane",
  off: 25,
  price: 50000
}

console.log('offer :>> ', offer1.getPrice("Saeed"));

//? Borrow another Object and Pass Params 
//TODO Example Call , Apply & Bind method
const getPriceOffer2 = offer1.getPrice;
const getMessageOffer2 = offer1.getMessage.bind(offer2); //To create a custom value of  THIS 
console.log('getPriceOffer2 :>> ', getPriceOffer2.call(offer2, "Amir"));  //Call Example
console.log('getMessageOffer2 :>> ', getMessageOffer2.apply(offer2, ["Asa", getPriceOffer2.call(offer2, "Liana")])); //Apply Example

//TODO تفاوت call و apply در نحوه گرفتن پارامتر های ورودی است و هیچ تفاوت دیگری باهم ندارند
//TODO Call : بصورت جداگانه پارامترهای ورودی به تابع را دریافت میکند 
//TODO Apply : بصورت یک آرایه کل پارامتر ها را دریافت میکند.
//TODO Bind : تفاوت دو متد اول با Bind : در دومتد اول در همان زمان فراخوانی متد مقدار this به obj ورودی اشاره میکند / 
//TODO      :  ولی در بایند زمانی که متد بایند شد ، در استفاده های بعدی هم به آبجگتی که در زمان تعریف اشاره شده به همان اشاره خواهد کرد.




//! CLOSURE
//? Persistency پایداری داده ها
//? Encapsulating  امنیت داده ها
//TODO  هدف اینه که متغیر های سراسری که در توابع استفاده شدند در هر فراخوانی اون تابع مقدار جدید بگپیرند مثال زیر 

let counter = 0;
function signInCounter() {
  console.log('counter :>> ', counter);
  return counter++;
}

function signUpCounter() {
  console.log('counter :>> ', counter);
  return counter++;
}

//TODO درصورتی که متغیر داخل تابع تعریف شود در هرمرجله صفر میشه و با هرفراخوانی از صفر شروع میکنه به شمردن که این باعث ناپایداری میشه 
signInCounter(); // 0
signInCounter(); // 1
signInCounter(); // 2
signUpCounter(); // 3 !!!?   Not Encapsulate  
//TODO با توجه به دسترسی سراسری به متغیر  این مدل استفاده از متغیر هم امنیت رو میبره زیر سوال

//? Closure : is Function that inline other Function return  : تابعی است که داخل یک تابع دیگه ریترن میشود

//TODO Closure Example
function signCounter() {
  let counter = 0;
  return function inline() {
    counter += 1;
    return counter;
  };

}
const counterSignIn = signCounter(); // Call function 1
const counterSignUp = signCounter();


console.log(counterSignIn()); //1     //Call function 2add
console.log(counterSignIn()); //2
console.log(counterSignIn()); //3
console.log(counterSignUp()); //1
console.log(counterSignUp()); //2
console.log(counterSignUp()); //3
console.log(counterSignUp()); //4
console.log(counterSignUp()); //5
console.log(counterSignUp()); //6


//! Basic String Method
//? indexof("char")  :  شماره اولین نتیجه جستجو شروع از صفر
//? lastindexof("char") : شماره اولین اندیس نتیجه جستجو از انتها 
//? slice(indexStart,indexEnd)  : استخراچ متن براساس ایندکس ابتدا و انتها  : امکان شمارش از انتها هم وجود دارد مثلا -4 : آخرین اندیس متن -1 است
//? includes("char") : return boolean : case sensitive :
//? startWith("char") : return boolean
//? Split(" ") : return array
//TODO 
const strSplit = "hi My name saeed jamali"
console.log(strSplit.split(" "));  //['Hi', 'my', 'name', 'saeed', 'jamali']

//? Join(" ") : return string
//TODO 
console.log(strSplit.split(" ").join("/"));  // Hi/my/name/saeed/jamali

//? tolowerCase() : return string
//? toUpperCase() : return string
//? trim() : remove space First and End string

console.log(strSplit.split("")[0].toUpperCase() + strSplit.toLowerCase().slice(1))

//? Replace("serachItem","replaceItem")
//? Padstart / padEnd 


function addStars(time) {
  const [hour, min, sec] = time.split(":");
  let hourStar = hour.padStart(2, "0");
  let minStar = min.padStart(2, "0");
  let secStar = sec.padStart(2, "0");
  const timeStars = [hourStar, minStar, secStar].join(":");
  console.log('min :>> ', timeStars);
}


addStars("1:12:34");

function maskCredit(cardNumber) {
  // let cardNumberArr =cardNumber.includes("-")  ? cardNumber.trim().split("-")[0].padEnd(16,"*") : cardNumber.trim().split("/")[0].padEnd(16,"*");
  const strNo = cardNumber.replace(" ", "").replace("-", "").replace("/", "");
  let lastStr = strNo.slice(-4);
  lastStr = lastStr.padStart(strNo.length, "*");
  console.log('cardNumber :>> ', lastStr);
}
maskCredit("1234/5678/1345/9876");


//! Array In JavaScript

//? lentgh
//? push(...) : return len of new array : add element end of array //rearray main array
//? pop() : return removed item(last Item) : remove element end of array //rearray main array
//? unshift(...) : retrun len of new array : add element first of array //rearray main array
//? shift() :  retrun remove item(first Item) : remove element first of array //rearray main array

const testArray = ['1', '2', '3', '4'];
console.log('Shift :>> ', testArray.shift()); // 1 
console.log('Shift :>> ', testArray); //['2', '3', '4']


//? indexOf(char) : return index of array contain char : -1 return when not found : 
//? includes(char) : return true / false : case sensitive

//? Slice(startindex,lastindex) : NOT MUTATED ARRAY : not rearray main array : return array : from startindex into lastindex-1
//? splice(start , deleteCount , item1 , item2 , item3 )  : Mutate Array //rearray main array : items(add to array)

const testArray1 = ['10', '20', '30', '40'];
console.log('Splice :>> ', testArray1.splice(1));  // ['20', '30', '40']
console.log('MainArray :>> ', testArray1); //['10']  : Mutate Array


//? reverse() : reverce array // return array
//? Join(char) : //return string
//? concat(array) : Not mutate //return new array //Not rearray main array

//? at(index) : return value in array[index] 


//TODO Access to last value array : arr.at(-1) / arr.slice(-1)[0] / arr[arr.length -1]

//* IMPORTANT
//? foreach((value,index,array)=>{}) : Not Mutate main Array //return undefined : not return   // INPUT CB

const allCourse = ["ReactJs", "NodeJs", "NextJs", "NuxtJs"];
const newCourse = [];
allCourse.forEach((value, index) => {
  newCourse.push({ id: index, name: value });
});
console.log(newCourse);

//? Map , Filter , Reduce   /ES6  : NOT MUTATE 


//? Map((value,index,array)=>{}) : return new array  / Not Mutate  //MAP vs Foreach : Map retrun BUT foreach Not return // INPUT CB //lenth return array == main array


const usersMap = [
  { id: 1, isActive: true, role: "ADMIN", name: "saeed" },
  { id: 2, isActive: false, role: "TEACHER", name: "ali" },
  { id: 3, isActive: false, role: "STUDENT", name: "Elina" },
  { id: 3, isActive: true, role: "STUDENT", name: "Ehsan" },

];

const newUserMap = usersMap.map((value) => value.name);    //const newUserNap = usersMap.map((value) => {return value.name});  // ['saeed', 'ali', 'Eli']
const newUserMap2 = usersMap.map((value) => { return { id: value.id } });    //return obj
console.log('newUserNap :>> ', newUserMap2);


//Code Saeed
const addMsgUsers = usersMap.map((user, index) => {
  if (user.isActive) {
    user.msg = `Hi ${user.name} , your profile is Activated, Role is ${user.role}`;

  }
  return user;
});
console.log('addMsgUsers :>> ', addMsgUsers);

//Code Saheb
const addMsgUsers1 = usersMap.map((user) => {
  return {
    ...user,
    msg: `Hi ${user.name} , your profile is ${user.isActive ? "ACTIVATED" : "NOT ACTIVATED"} ,and your role is ${user.role}`
  }
});

console.log('addMsgUsers1 :>> ', addMsgUsers1);


//? Filter((value,index,array)=>{}) : return new array  / Not Mutate   // INPUT CB //lenth return array != main array

const filterUsers = usersMap.filter((user) => user.isActive == true); // usersMap.filter((user)=>user.isActive);
console.log('filterUsers :>> ', filterUsers);

//? reduce((acc , current , index , array)=>{},initial)  : final result is a single value //Sum of items  // acc =sum of current / init acc= initial // return single value
const product = [
  { title: "p-1", price: "88.9$" },
  { title: "p-2", price: "1599$" },
  { title: "p-3", price: "119$" },
  { title: "p-4", price: "99$" },
];

const totalPrice = product.reduce((acc, product) => {
  let newPrice = Number(product.price.slice(0, -1));
  return acc += newPrice;
}, 0);

console.log('totalPrice :>> ', totalPrice);


//? Challenge
const userMarks = [9, 10, 13, 18, 20, 15, 7];
//* 1-calculate the avg of mark
//* 2-calculate the avg of passed student
//* 3-shift marks based +3 and recaculate avg

//* 1
function avgMarks(marks) {
  const sumMarks = marks.reduce((acc, mark, index) => {
    return acc += mark;
  }, 0);
  return (sumMarks / (marks.length)).toFixed(2);
}

console.log('AVG :>> ', avgMarks(userMarks));

//* 2
function avgPassedMark(marks) {
  const passMarks = marks.filter((mark) => mark > 9);
  avgMarks(passMarks);
  console.log('passMarks :>> ', avgMarks(passMarks));
}
avgPassedMark(userMarks);

//* 3
function shiftMarks(marks, shiftMark) {
  const shiftedMark = marks.map((mark) => mark + shiftMark);
  return avgMarks(shiftedMark);
}

console.log('shiftMarks :>> ', shiftMarks(userMarks, 30));


//? find(()=>) :  filter return array but find : return first item satisfy condition  : condition is Cb function
//? findIndex(()=>)  : similar indexOf : return index :  condition is Cb function

//? some and every   : return is boolean
//? some similar find but : find return item but some return boolean
//? some similar includes but : include parameter simple value but some cb function  : at least one index satisfy in cb function
//? every : all index satisfy call back function condition ? : retrun boolean

const enrolledCourse = [1, 4,3];
const carts = [
  { id: 1, title: "P-1", price: "80$" },
  { id: 2, title: "P-2", price: "150$" },
  { id: 3, title: "P-3", price: "200$" },
  { id: 4, title: "P-4", price: "70$" },
  { id: 2, title: "P-5", price: "800$" },
];


const coursePassed = carts.filter((cart) => !enrolledCourse.includes(cart.id));

console.log("Enrol : ",coursePassed);


//? Sort((a,b)=>) : mutated



//! Math

//TODO generate random between min / max
//? Math.ceil  / Math.floor / Math.round / Math.random / 

function generateRandom(min,max){  // (min,max)=> Math.floor(Math.random()*max+min) ;
  min = Math.ceil(min); //3.4 => 4
  max = Math.floor(max); // 8.1 => 8  
  let rnd = Math.floor(Math.random()*(max-min+1)+min);
  return rnd;
}


console.log('getRandom(1,100) :>> ', generateRandom(1,180));


//? Tofixed
console.log('Tofixed :>> ', (123).toFixed(3)); // 123.000
console.log('Tofixed :>> ', (123.326565).toFixed(2)); // 123.33


//! Date
const now = new Date();
console.log('now.persian Date :>> ', now.toLocaleDateString("fa"))  // ۱۴۰۲/۶/۴
console.log('now.persian Date :>> ', now.toLocaleString("fa"))  //۱۴۰۲/۶/۴, ۱۳:۳۶:۲۴

console.log('Date.now() :>> ', Date.now());  // milisec from 1 jun 1970  // use : compare date  //* timestamp


//? setTimeOUt  / setInterval
let min = 0;
let sec = 0;
function countDownTimer(number){ 
  let counter = number ;
  let intervalTimer  = setInterval(()=>{
    let min  = Math.floor(counter/60).toString().padStart(2,"0");
    let sec = (counter % 60).toString().padStart(2,"0") ;
    counter--;
    console.log(`${min}:${sec}`);
    if(counter<0) {
      clearInterval(intervalTimer);
     console.log("FINISHED");}
     },1000);

}

countDownTimer(15);