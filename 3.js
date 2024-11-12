console.log("Java-Script ..... Initialization")
// const item = {

//     Name: "Qadees",
//     Number: "0900-78601",
//     Marks: "525"

// }
// console.log("Student.Name", item.Name)
// console.log("Student.Number", item.Number )
// console.log("Student.Marks", item.Marks)

// Create a variable of type string
// let myString = "This is a string";

// Assign a number to the variable (this will convert the number to a string)
// myString = 42;

// Print the variable and its type
// console.log("Value:", myString);        // Output: 42
// console.log("Type:", typeof myString);  // Output: number

// var a = "Qadees"

// Qadees="91"
// console.log("String", Qadees)
// console.log("Type", typeof Qadees)

// const obj = {
//     Name: "Qadees",
//     // Number: "0900-78601",
//     // Marks: "525"

// }
// console.log("Object", obj.Name)

// obj.Name="91"
// console.log("Number", obj.Name)

// var dic ={
//     Name:"Identity",
//     Class:"School",
//     Religion:"Habit",
//     Qadees:"Gohar",
//     Tasleem:"Accept"
// }
// console.log("Dictionary")
// console.log("Name",dic.Name)
// console.log("Class",dic.Class)
// console.log("Qadees",dic.Qadees)
// console.log("Religion",dic.Religion)
// console.log("Tasleem",dic.Tasleem)


// Creating a dictionary object with five words and their meanings
// const dictionary = {
//     "abundance": "a very large quantity of something",
//     "benevolent": "well meaning and kindly",
//     "cognizant": "having knowledge or being aware of",
//     "diligent": "having or showing care and conscientiousness in one's work or duties",
//     "ephemeral": "lasting for a very short time"
// };
// // Function to display the dictionary
// function displayDictionary(dict) {
//     for (let word in dict) {
//         console.log(`${word}: ${dict[word]}`);
//     }
// }



// Call the function to display the dictionary
// displayDictionary(dictionary);
// let age = 25

// if(age>=10 && age<=20){
//     console.log("The Age is Valid")
// }
// else{
//     console.log("The Age is not Valid")
// }

// let day = 2
// let dayname
// switch (day) {

//     case 1:
//         dayname = "Mon"
//         break

//     case 2:
//         dayname = "Tue"
//         break

//     case 3:
//         dayname = "Wed"
//         break
//     default:
//         dayname = "invalid day"
// }
// console.log(dayname)

// let number=20
// // function isDivisibleBy2And3(number) {
// function isDivisibleBy2And3(number){


//     if(number%2 == number%3){
//         return(`${number} it is divisible`)
//     }
//     else{
//         return(`${number} it is not divisible`)
//     }
// }
// console.log(isDivisibleBy2And3(number))


// let number=45
// // function isDivisibleBy2And3(number) {
// function isDivisibleBy2And3(number){


//     if(number%2 || number%3){
//         return(`${number} it is divisible`)
//     }
//     else{
//         return(`${number} it is not divisible`)
//     }
// }
// console.log(isDivisibleBy2And3(number))


// let age=18

// // (age>=18) ? 'You can drive' :  'You cannot drive'  
// console.log((age >= 18) ? 'You can drive' : 'You cannot drive');

// let a = 1
// for (let i = 0; i < 5; i++) {
//         console.log(a+i);
//       }

// for (let i = 0; i < 90; i++) {
//     console.log("I love MY MOther.");
//   }

//   for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
//   }

// const person = {
//     name: "Alice",
//     age: 30,
//     city: "New York"
//   };

//   for (let key in person) {
//     console.log(key + ": " + person[key]);
//   }

//     var obj ={
//         Name : "Qadees",
//         Class: "10",
//         Age : "17",

//    }

//    for (const key in obj) {

//         const element = obj[key];
//         console.log(key , element)
//     }

// for (const c of "object") {
//     console.log(c)
// }
// for (const c of [1,2,3,4,5,67,78,99]) {
//     console.log(c)
// }

// let i =0
// while (i<20) {

//     console.log(i)
//     i++
// }
// let i = 4
// do {
//     console.log(i)
//     i++
// } while (i<10);

// let i = 11
// do {
//     console.log(i)
//     i++
// } while (i<10);

// function first(name) {

//     console.log("I'm ChatGPT" + name + "designed to topics.")
//     console.log("I can help with" + name + "questions to chat.")
//     console.log("My goal is to make " + name + "and")
// }
// first("Qadees")
// first("Tasleem")
// first("Ali")

// function sum(a, b , c=5) {
//     return a + b + c
// }
// result1 = sum(3, 6)
// result2 = sum(4, 3)
// result3 = sum(9, 8 , 1)

// console.log("The Sum Is ", result1)
// console.log("The Sum Is ", result2)
// console.log("The Sum Is ", result3)

// const fuc1 = (a) => {
//     console.log("I am an arrow function", a)
// }
// fuc1(20)
// fuc1(50)
// fuc1(70)

// var obj={
//     Harry:"50",
//     Qadees:"50",
//     Ali:"50"
// }


// for (const key in obj) {

//         const element = obj[key];
//         console.log( key,element )

//     }

// Define the student object with an array of marks
// const student = {
//     name: "John Doe",
//     marks: [85, 92, 78, 90, 88]
//   };

//   // Loop through the array of marks and print each mark
//   console.log(`Marks of ${student.name}:`);
//   for (let i = 0; i < student.marks.length; i++) {
//     console.log(student.marks[i]);
//   }


// let name = `qa/'`
// console.log("name",name)
// let string = `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione mollitia suscipit voluptates incidunt omnis voluptas inventore. Veritatis eius temporibus rem, inventore excepturi assumenda \nrepudiandae deleniti ab incidunt impedit iste asperiores, consequuntur rerum ad?\r Ea voluptas incidunt tempore? \tAliquam ea autem quas voluptatum eaque alias laudantium.`

// // console.log("name",string)
// let name = "Qadees"
// let you=name.slice(2,5)
// console.log(you)
// let name="Harry bhai"
// let newname = name.replace("Harry","Qadees")
// console.log(name)
// console.log(newname)
// let name1="Qadees"
// let name2="Ali"
// let name3=name1.concat(name2,"yes")
// console.log(name1)
// console.log(name2)
// console.log(name3)

//  let name1="      Q a d e e s"
// let newname=name1.trim()
// console.log(newname)
// let name="Qadees"
// let name1=name [0]
// console.log(name1)
// let name1 = "QADEES"
// let name=name1.toLocaleLowerCase()
// console.log(name)

// let string="Give RS 1000"
// let newstring=string.slice(8,12)
// console.log(newstring)

// let array=[3,2,3,4,5,8]

// let array1=[4,2,3,4]
// let array2=[3,4,4,4]



// console.log(array.toString(1,2,3,4))
// console.log(array.join("."))
// console.log(array.pop())
// console.log(array.push(1))
// console.log(array.shift())
// console.log(array.unshift(2))
// console.log(delete array[1])
// console.log(array.concat(array1,array2))
// console.log(array.sort())
// console.log(array.splice(2,1,5))
// console.log(array.slice(1,5))
// console.log(array.reverse())


// array.forEach((value,index,array) => {
//     console.log(value,index,array)
// });

// let obj={
//     a:1,
//     b:2,
//     c:3

// }

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element)

//     }
// }


// for (const key of array) {
//     console.log(key)
// }

// let array=[1,4,9,5,8,7]
// let newarr=[]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newarr.push(element**2)
// }

// let newarr=array.map((e,index,value)=>{
//     return e**2

// })

// console.log(newarr)
// console.log(array.filter((e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }))


// let a=[1,2,3,4,5]
// const red =(a,b)=>{
//     return a*b
// }
// console.log(a.reduce(red))

// let array=[1,3,5,7,9]
// // let newarr=array.map(e=>{
// //     return e+2
// // })
// // console.log(newarr)

// let array=[10,20,22,40]

// console.log(array.map(e=>{
//     return e**2
// }))

// Array=[1,2,3,4,5,6,7,8,9]
// // console.warn(Array)
// // console.table(Array)
// // console.error (Array)
// console.info(Array)
// // console.warn(Array)
// // console.warn(Array)
// // console.warn(Array)

// let input=prompt("Hi","No")
// let input=confirm()
// console.log(input)


// let a=prompt("Enter Your Age")

// if(a>=18){
//     alert("You can Drive")

// }

// else{
//     alert("You cannot Drive")
// }


// let b=confirm("Want To See Prompt Again")



//     if (true) {
//         prompt(a)

//         if(a>=18){
//             alert("You can Drive")

//         }

//         else{
//             alert("You cannot Drive")
//         }

//     } 


// if(a<1){
//     console.error(a)
// }


// let a=prompt("ENTER A NUMBER")

// if(a>4){
//     location.href=("https://codewithharry.com")
// }

// let a=prompt("Enter A Number")
// if(a>=5){
//     document.body.style.backgroundColor="blue"
// }
// else{
//     document.body.style.backgroundColor="green"
// }


// let cont=document.getElementsByClassName("box")
// console.log(cont)
// cont[2].style.backgroundColor="red"

// document.getElementById("1").style.backgroundColor="blue"
// document.querySelector(".box").style.backgroundColor="yellow"



// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor="green"
// })
// document.body.children[0].children[0].children[0].style.backgroundColor="red"
// document.body.firstElementChild.firstElementChild.style.backgroundColor="red"
// document.body.firstElementChild.children[2].style.backgroundColor="red"
// document.body.querySelectorAll(".bb").forEach(e=>{
//     e.style.backgroundColor="cyan"
// })

// let boxes=document.querySelector(".container").children

// function getrandomcolor(){
//     val1 =  Math.random()*225
//     val2 =  Math.random()*225
//     val3 =  Math.random()*225

//     return `rgb(${val1} , ${val2} , ${val3})`

// }
// Array.from(boxes).forEach(e=>{

//     e.style.backgroundColor = getrandomcolor()
//     e.style.color = getrandomcolor()

// })



// let boxes=document.body.querySelectorAll(".box")
// function getrandomcolor(){

//     value1=Math.random()*295
//     value2=Math.random()*295
//     value3=Math.random()*295
//     return `rgb(${value1} , ${value2}, ${value3})`
// } 
// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor=getrandomcolor()
//     e.style.color=getrandomcolor()
// })

// let div=document.createElement("div")
// div.innerHTML="I HAVE BEEN INSERTED"
// div.setAttribute("class","inserted")
// document.querySelector(".container").append(div)
// document.querySelector(".container").prepend(div)
// document.querySelector(".container").replaceWith(div)
// document.querySelector(".container").before(div)
// document.querySelector(".container").after(div)


// let cont=document.querySelector(".container")
// cont.insertAdjacentHTML("afterbegin","HIO")
// let cont=document.querySelector(".container")
// cont.insertAdjacentHTML("afterend","HIO")
// let cont=document.querySelector(".container")
// cont.insertAdjacentHTML("beforebegin","HIO")
// let cont=document.querySelector(".container")
// cont.insertAdjacentHTML("beforeend","HIO")



// let button=document.getElementById("btn")
// button.addEventListener("dblclick",()=>{
//   document.querySelector(".box").innerHTML="<b>hey you click</b> "
// })

// button.addEventListener("keyup",(e)=>{
// console.log(e.key)

//     })
// document.addEventListener("keydown",(e)=>{
//  console.log(e.key,e.keyCode)
//     })

// document.querySelector(".container").addEventListener("click",(e)=>{
//     e.stopPropagation()
//     alert("hi")
// })
// document.querySelector(".box").addEventListener("click",(e)=>{
//     e.stopPropagation()
//     alert("hoo")
// })


// function getrandomcolor(){
//     val1=Math.random()*225
//     val2=Math.random()*225
//     val3=Math.random()*225
//  return `rgb(${val1},${val2},${val3})`
// }

// let a=setInterval(() => {
//     button.style.background=getrandomcolor()
// }, 0.01);
// console.log(a)

// let a=setTimeout(() => {
//     button.style.background=getrandomcolor()
// }, 2000);
// console.log(a)

// document.querySelector(".one").addEventListener("click",()=>{

//     alert("you click 1")
// })
// document.querySelector(".two").addEventListener("click",()=>{

//     alert("you click 2")
// })
// document.querySelector(".three").addEventListener("click",()=>{

//     alert("you click 3")
// })


// document.querySelector(".onoff").addEventListener("click",()=>{

//     document.body.firstElementChild.classList.toggle("co")
// })

// let rand=Math.random()
// let first, second,third

// if(rand<0.33){
//     first="Hello WORLD"
// }
// else if(rand>=0.33&&rand<=0.66){
// first="YOU"
// }
// else{
//     first="ME"
// }

// rand=Math.random()
// if(rand<0.33){
// second="MR"
// }
// else if(rand>=0.33&&rand<=0.66){
// second="HI"
// }
// else{
//     second="AY"
// }

// rand=Math.random()
// if(rand<0.33){
//     third="UNIVERSE"
// }
// else if(rand>=0.33&&rand<=0.66){
// third="WATER"
// }
// else{
//     third="AIN"
// }

// console.log(`${first} ${second} ${third}`)

// const callback = (arg) => {
//     console.log(arg)
//     alert("script.src")
// }

// const loadscript = (src, callback) => {

//     let script = document.createElement("script")
//     script.src = src
//     script.onload = callback("Qadees")
//     document.head.append(script)
//     script.onerror(new Error("failed") )
// }

// loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)



// const loadscript = (src, callback) => {

//     let script = document.createElement("script")
//     script.src = src
//     script.onload = callback("Qadees")
//     document.head.append(script)
// }

// loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (arg) => {
//     console.log(arg)
//     alert("script.src")
// fn("firstarg", () => {
//         dn("seconfarg", () => {

//         })
//     })
// })





// let prom1 = new Promise((resolve, reject) => {
//     let a = Math.random()
//     if (a < 0.5) {
//         reject("NO IT WAS REJECTED")

//     }
//     else {
//         setTimeout(() => {
//             console.log("yes i am done")
//             resolve("qadees")
//         }, 3000);

//     }
// })

// let prom2 = new Promise((resolve, reject) => {
//     let a = Math.random()
//     if (a < 0.5) {
//         reject("NO IT WAS REJECTED 2")

//     }
//     else {
//         setTimeout(() => {
//             console.log("yes i am done 2")
//             resolve("qadees 2")
//         }, 1000);

//     }
// })

// let prom3 = new Promise((resolve, reject) => {
//     let a = Math.random()
//     if (a < 0.5) {
//         reject("NO IT WAS REJECTED 3")

//     }
//     else {
//         setTimeout(() => {
//             console.log("yes i am done 3")
//             resolve("qadees 3")
//         }, 3000);

//     }
// })

// let prom4 = new Promise((resolve, reject) => {
//     let a = Math.random()
//     if (a < 0.5) {
//         reject("NO IT WAS REJECTED 4")

//     }
//     else {
//         setTimeout(() => {
//             console.log("yes i am done 4")
//             resolve("qadees 4")
//         }, 1000);

//     }
// })

// let prom5 = new Promise((resolve, reject) => {
//     let a = Math.random()
//     if (a < 0.5) {
//         reject("NO IT WAS REJECTED 5")

//     }
//     else {
//         setTimeout(() => {
//             console.log("yes i am done 5")
//             resolve("qadees 5")
//         }, 1000);

//     }
// })
// let p3 = Promise.reject([prom1, prom2, prom3, prom4, prom5])
// p3.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

// let p3 = Promise.allSettled([prom1, prom2])
// p3.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

// let p3 = Promise.all([prom1, prom2])
// p3.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

// prom1.then((a) => {
//     console.log(a)
//     ((err)=>{
// console.log(err);

//     })
// })

// prom1.then((a) => {
//     console.log(a)
// }).catch((error)=>{
//     console.log(error)
// })

// const prom1= Promise.resolve("resolved a")
// const prom2= Promise.reject("resolved b")
// const prom3=new Promise((resolve,reject)=>{

//     setTimeout(resolve, 1000, "Resolved C after 1000ms");

// })

// Promise.any([prom1,prom2,prom3])
// .then((a)=>{
// console.log(a);

// })
// .catch((err)=>{
//     console.log(err);


// })

// const promiseD = Promise.reject("Rejected D");
// const promiseE = Promise.reject("Rejected E");

// Promise.any([promiseD, promiseE])
//   .then((value) => {
//     console.log(value); 
//   })
//   .catch((error) => {
//     console.log(error); // AggregateError: All promises were rejected
//   });

// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)

//         }, 3000);
//     })
// }

// async function getdata() {

//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     //   .then(response => response.json())
//     //   .then(json => console.log(json))
//     //    console.log(x)
//     let data = await x.json()
//     // let data = await x.text()
//     // console.log(data)
//     return data
// }
// async function main() {

//     console.log("LODING");
//     console.log("LODING process");
//     console.log("LODING data");

//     let data = await getdata();
// // data.then((v)=>{

//     console.log(data);

//     console.log("data is loaded");
// // })

// }
// main()




// const randomDelay = () => {
//     return new Promise((resolve, reject) => {
//         timeout = 1 + 6 * Math.random()
//         setTimeout(() => {
//             resolve()
//         }, timeout * 1000);
//     })
// }

// const additem = async (item) => {
//     await randomDelay()
//     let div = document.createElement("div")
//     div.innerHTML = item
//     document.body.append(div)
// }
// async function main() {

//     let t = setInterval(() => {
//         let last = document.body.getElementsByTagName("div")
//         last = last[last.length - 1]
//         if (last.innerHTML.endsWith("...")) {
//             last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
//         }
//         else {

//             last.innerHTML = last.innerHTML + "."
//         }
//     }, 100);



//     let text = ["Initialized YOU", "Dtetecting Files", "Reading PAsswords", "Sending Files to Server", "Cleaning UP "]

//     for (const item of text) {
//         await additem(item)

//     }
//     await randomDelay()
//     clearInterval(t)

// }
// main()


// function main(){

//     let x=1
//     let a = prompt("enter first")
//     let b = prompt("enter second")
//     if (isNaN(a) || isNaN(b)){
//         throw Error("N OT ALLOW")
//     }
//     let sum = parseInt(a) + parseInt(b)

//     try {
//         alert(sum*x)
//         return true

//     } catch (error) {
//         console.log("Error aa gaya");
//         // alert(error.name)
//         // alert(error.message)
//         // alert(error.stock)
//         return false
//     }

//     finally{
//         console.log("Files are being closed")
//     }

// }
// let c=main()

// async function main(){
//     return new Promise((resolve,reject)=>{
//         // resolve(true) 
//         setTimeout(() => {
//             resolve(true)
//         }, 3000);
//     }).then(alert("DONE"))
// }
// main()

//  async function loadscript(){
//     return new Promise((resolve,reject)=>{
// const script=document.createElement("script")
// script.onload=()=>{resolve(455)}
// script.reject=()=>{reject(`ERROR WAS OCCURED`)}
// document.body.append(script)
//     })
// }
// async function main(){

//    await loadscript()
//     .then(()=>{
//         resolve(455)
//         alert("Script Was Loaded")
//     })
//     .catch((error)=>{
//         console.error(error)

//     })
// }

//  function laod() {

//     return new Promise((resolve,reject)=>{
// setTimeout(() => {
//     reject(new Error("ERROR WAS HERE"))
// }, 3000);
//     })
//         }
// // laod()
// async function main(){
//     try {
//         await laod()
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// main()



// class animal {
//     constructor(name) {
//         this.name = name
//         console.log("ANIMAL IS CRAETED");

//     }
//     eats() {
//         console.log("khaa raha hoon")

//     }
//     jumps() {
//         console.log("kood raha hoon");

//     }
// }

// class lion extends animal {
//     constructor(name){
//         super(name)
//         console.log("THIS IS LION")
//     }
// eats(){
//     super.eats()
//     console.log("KHA RAA ROARA LION");

// }
// }

// let a = new animal("BUNNY")
// console.log(a);

// let l = new lion("SHERA")
// console.log(l);

// class user {
//     constructor() {
//         console.log("HEY I AM QUIZ");

//     }
//     qone() {
//         console.log("YOUR NAME");

//     }
//     qtwo() {
//         console.log("YOUR CLASS");

//     }

// }
// let a = new user
// console.log(a)

// class animal{
//     constructor(name){
//         this.name=name
//     }
//     run(){
//         console.log("7")
//     }

// }
// class monkey extends animal{
//     constructor(name){
//         super(name)

//     }
//     hides(name){
//         super.name
// console.log(`${name} hides`);

//     }
// }

// let a=new animal("UNKNOWN")
// console.log(a);

// let m=new monkey("MONKEY")
// console.log(m);

// class staticmethod {
//     static smethod() {
//         console.log("HEY");

//     }
//     employes(){
//         console.log("QADEES")
//         console.log("QADEES")
//         console.log("QADEES")
//         console.log("QADEES")

//     }
// }
// let a =new staticmethod()
// console.log(a)

// class person {
//     get(name) {
//         return this._name
//     }
//     set (newname) {
//         this._name =newname

//     }
// }
// let a=new person()
// console.log(a)

// class human{
//     constructor(name){
//         this.name=name
//         console.log("I am HUman");

//     }
//     eats(){
//         console.log("YES HE EATS");
//     }
//     runs(){
//         console.log("YES HE RUNS");    
//     }
//     study(){
//         console.log("MAY BE");

//     }

// }
// class student extends human{
//   constructor(name){
//       super(name)
//       this.name=name
//     console.log("I AM A STUDENT")
//   }
//   study(){
//     console.log("YES I STUDY")

//   }
// }
// let h=new human("QADEES")
// console.log(h);
// let st=new student("ANYONE")
// console.log(st)
// gpt

// class ComplexNumber {
//     constructor(real, imaginary) {
//       this._real = real;
//       this._imaginary = imaginary;
//     }


//     get real() {
//       return this._real;
//     }

//     set real(value) {
//       this._real = value;
//     }

//     get imaginary() {
//       return this._imaginary;
//     }

//     set imaginary(value) {
//       this._imaginary = value;
//     }

//     toString() {
//       return `${this._real} + ${this._imaginary}i`;
//     }
//   }

//   const complex = new ComplexNumber(3, 4);

//   console.log(complex.toString()); 

//   console.log(complex.real); 
//   console.log(complex.imaginary);

//   complex.real = 5;
//   complex.imaginary = 7;

//   console.log(complex.toString());

// class complexnumber {
//     constructor(real, imaginary) {
//         this._real = real
//         this._imaginary = imaginary

//     }
//     get real() {
//         return this._real
//     }
//     set real(value) {
//         this._real = value
//     }
//     get imaginary() {
//         return this._imaginary
//     }
//     set imaginary(value) {
//         this._imaginary = value
//     }

//     tostring() {
//         return `${this._real}+${this._imaginary}i`
//     }

// }
// const complex = new complexnumber(3, 4)
// console.log(complex.tostring())
// console.log(complex.real);
// console.log(complex.imaginary);
// complex.real = 5
// complex.imaginary = 7
// console.log(complex.tostring())

// async function iif(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(91)
//         }, 1000);
//     })
// } 
// (async function main(){
//     let a=await iif()
//     console.log(a);

//     let b=await iif()
//     console.log(b);
// })()

// let [a,b,...rest]=[1,2,1,2,23,4,5,5,6,7,7,8,8,8,8,7,7,8,9,9,0,9,9,8,8]
// console.log(a,b,rest);

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// let { a, b,c } = obj
// console.log(a,b)

// function sum(a, b, c) {
//     return a + b + c
// }
// let arr = [1, 2, 3]
// console.log(sum(...arr));

// const a = "the", b = "no"
// const c = { a, b }
// console.log(c)
// let num=6
// console.log(num);


// async function get() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("HELLO")
//         }, 2000);
//     })
// }
// async function main() {

//     let a = await get()
//     console.log(a);
// }
// async function no(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("WORLD")
//         }, 4000);
//     })

// }
// async function ye(){
//     let b= await no()
//     console.log(b)
// }
// main()
// ye()

// function avg(a, b, c, d) {
//     return (a + b + c + d) / 4
// }
// let arr = [10, 23, 34, 45]
// console.log(avg(...arr));

// function nsec(n){
//     return new Promise((resolve,reject)=>{

//         setTimeout(() => {
//             resolve(`RESOLVE AFTER ${n} SECONDS`)
//         }, 2000);
//     })
// }
// (async function main(){
//     const nvalues=[1,2,3,4,5,6,7,8,9]
//     for (let n of nvalues) {
//         const result=await nsec(n)
//         console.log(result)
//     }
// })()

// function nsec(n){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(`RESOLVED AFTER ${n} SECONDS`)
//         }, n*1000);
//     })
// }
// (async function main(){
// let nvalues=[1,2,3,4,5]
// for (let n of nvalues) {
//     let result=await nsec(n)
//     console.log(result);

// }
// })()

// function simpleinterest(principle, rate, time){
//    let interest = (principle * rate * time)/100
//     return interest
// }
// const principle=[1000]
// const rate=[2]
// const time=[7]
// const interest=simpleinterest(principle, rate, time)
// console.log(`SIMPLE INTEREST ${interest}`)

