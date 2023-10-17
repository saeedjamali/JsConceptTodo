//! Select Element

const courses = document.querySelector(".courses");
console.log(courses);


//! Create Element : add element
//? 1- create
//? 2- add content
//? 3-append : add element to DOM

const newCourseAppend = document.createElement("p");
const newCoursePrepend = document.createElement("p");     
newCourseAppend.classList.add("course-title");
newCoursePrepend.classList.add("course-title");
newCourseAppend.textContent ="NodeJs Append";
newCoursePrepend.textContent ="NodeJs Prepend";
courses.append(newCourseAppend);
courses.prepend(newCoursePrepend);


const divMore =  document.createElement("div");
const pTag = document.createElement("p");
const btnMore =  document.createElement("button");
pTag.classList.add("see-more");
btnMore.classList.add("see-btn");
pTag.textContent = "See All Courses";
btnMore.textContent =  "SEEALL";
courses.append(divMore);
divMore.append(pTag);
pTag.append(btnMore);