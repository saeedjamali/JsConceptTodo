const course = {
  title: "Next Js",
  price: 1000,
  discount: 10,
  calcOffPrice() {
    return (1 - this.discount / 100) * this.price;
  },
};

course.price = 50000;
course.discount = 50;
// console.log(course.calcOffPrice());

//Factory   //Constructoe

function createCourse(title, ...rest) {
  const [price, ...others] = rest;
  console.log(rest);
  console.log(others);
  console.log(price);
  return {
    title,
    price: price,
    discount,
    calcOffPrice: function () {
      return this.price * (1 - this.discount / 100);
    },
  };
}
createCourse.price = 5000;
// console.log(createCourse("hiii", 4000, 8000, 12000).calcOffPrice());
const { price: priceCourse, ...otherCourse } = course;
// console.log(otherCourse);

const number = {
  age: 30,
  course: ["a", "bbbbbbbb", "c"],
};

const copiedNumber = number;
copiedNumber.age = 180;
copiedNumber.course.push("d");
// console.log("number  :>> ", number);
// console.log("copiedNumber  :>> ", copiedNumber);

//1-Shallow Copy    VS    Deep Copy

//Shallow
const shallowCopyNumber = Object.assign(number);
shallowCopyNumber.age = 20;
shallowCopyNumber.course.push("Z");
// console.log("ShallowCopy : ", shallowCopyNumber);
// console.log("number  :>> ", number);

//Deep

const deepCopyNumber = JSON.parse(JSON.stringify(number));
deepCopyNumber.age = 50;
deepCopyNumber.course.push("XX0");
// console.log("deepCopyNumber : ", deepCopyNumber);
// console.log("number  :>> ", number);

const user = {
  name: "Saeed",
  permission: "Super",
  id: 1001,
};

const newRole = new Map();
newRole.set(user, "Admin");
for (const key of newRole.keys()) {
  // console.log(key.name);
}

const usersMap = [
  { id: 1, isActive: true, role: "ADMIN", name: "saeed" },
  { id: 2, isActive: false, role: "TEACHER", name: "ali" },
  { id: 3, isActive: false, role: "STUDENT", name: "Elina" },
  { id: 3, isActive: false, role: "STUDENT", name: "Ehsan" },
];

const userMarks = [10, 15, 20, 20, 20, 20, 18, 19, 13, 19];

const sum = userMarks.reduce((acc, current, index) => (acc += current), 0);
// console.log(`Avg UserMarks is : ${sum / userMarks.length}`);
const sumPassed = userMarks.filter((value) => value > 10);
// console.log(sumPassed);

const userShift = userMarks.map((mark) => mark + 3);
// console.log(userShift);


// console.log(usersMap.find((marks)=>marks.id==3))
console.log(usersMap.every((user)=>!user.isActive));
console.log(Math.random()*20);

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


