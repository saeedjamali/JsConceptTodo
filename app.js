const course = {
    title:"JAVAScript",
    price:1800,
    discount: 20,
    calcOffPrice : function(){
        return this.price * (1-this.discount/100)
    }
}

// console.log(course.calcOffPrice());

//Create Object

//1-Factory
function createCourse(title,price,discount){
    return{
        title,
        price,
        discount,
        calcOffPrice:function(){
            return this.price * (1-this.discount/100);
        }
    }
}

// console.log(createCourse("NodeJs",1900,10).calcOffPrice() );

//2-Constructore
function CreateCourse(title,price,discount){
    this.title = title;
    this.price = price;
    this.discount = discount;
    this.calcOffPrice =function(){
        return price * (1-discount/100)
    }
}

// const course1 = new CreateCourse("NextJs",1500,50);
// console.log('course1.calcOffPrice() :>> ', course1.calcOffPrice());

const a = 20;
let b = a ;
b = 100;
// console.log('a :>> ', a);
// console.log('b :>> ', b);



//COPY OBJECT

const number = {
    age : 30,
    course :["a","bbbbbbbb","c"]
}

const copiedNumber = number ;
copiedNumber.age = 180;
copiedNumber.course.push("d");
console.log('number  :>> ', number );
console.log('copiedNumber  :>> ', copiedNumber );

//1-Shallow Copy    VS    Deep Copy
const shallowCopy = Object.assign(number);
shallowCopy.age =1500;
shallowCopy.course.push(20);
console.log('shallowCopy  :>> ', shallowCopy );


//2-Deep Copy
const deepCopy = JSON.parse(JSON.stringify(number));
deepCopy.course.push(55);
console.log('deepCopy  :>> ', deepCopy );



//OBJECT Destructuring
const {course : courseNumber,age}=number;
console.log('courseNumber :>> ', courseNumber);
console.log('courseNumber :>> ', age);
//defualt value
const {course : courseNumber1=["ali","hasan"]}=number;

//TEMPLATE Literal
console.log('Template Literal  :>> ',  ` Hello Template Literal World .... ${ courseNumber1[1]}`);



//Array Destructure
const [a1,,b1] = number.course; // a1 = number.course[0] ;  b1=number.course[2]
console.log('a1 :>> ', a1); 

//Spread Operator
const arr = [1,2,3,4];
const arr2=[10,11,...arr];
console.log('arr2 :>> ', arr2);

const arr3 = [...arr]; //Shallow Copy





//Rest Operator
const restArr= [1,2,3,45,5];
const [Array,...restArr2]=restArr; // restArr2 =[2,3,45,5]
console.log('restArr2 :>> ', restArr2);