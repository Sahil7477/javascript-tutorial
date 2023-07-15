// let length=10
// const width=3.14
// let area

// area=length*width
// console.log(area)
// let num=1525624825555555555555584885555555555555555554854n
// console.log(num)
// let user= "sa\thil\naktar  \n\"hello world\""
// console.log(user)

// let bool= 5<3
// console.log(typeof bool)

// let user1= null
// console.log(user1)

// let user2 = 3.3
// console.log(typeof user2)

// let x = String(8)
// console.log(typeof x)

//  x=0
//  console.log(Boolean(x))

//  let num1 = 5/"sahil"
//  console.log(num1)

//  let x1 = 9
//  x1 = !x1

//  x1=10
//  x1 = x1 + " "
//  console.log(x1,typeof x1)
// let x = 5
// x = x+""
// console.log(x,typeof x)

// x=x+2
// console.log(x,typeof x)

// x=x-"2"
// console.log(x,typeof x)
// let user =parseInt("123 sahil aktar")
// console.log(user)
// let x="8"
// let y=8
// let data = x==y
// console.log(data)

// let x=8, y=9, z=10
// let result = x<y && x>z
// let n = !result

//finding odd even

// console.log(result,n)
//  let x = 10

//  if(x%2===0){
//     console.log("x is an even number")
//  }
// else{
//     console.log("x is a odd number")
// }
// console.log("done")

// let day = "saturday";

// //switch case

// switch(day){
//     case 'monday':
//         console.log("7am");
//         break;
//     case 'tuesday':
//         console.log("4am");
//         break;
//     case 'wednesday':
//         console.log("4am");
//         break;
//     case 'thursday':
//         console.log("4am");

//         break;
//     case 'friday':
//         console.log("5am");
//         break;
//     case 'saturday':
//         console.log("5am");
//         break;
//     default:
//         console.log("sleep......its a holiday");

// }
// console.log("get to work");

//finding leargest number

// let num1=1
// let num2=60
// let num3=10

// if(num1>num2 && num1>num3){
//     console.log("num1 is the greatestt");

// }
// else if (num2>num1 && num2>num3){
//     console.log('num2 is the greatest');
// }
// else{
//     console.log("num3  is the greatest")

// }

// console.log("that's all")

//template literal

// let x =10
// let y=20

// let result = x + y

// console.log(`the addition of ${x} and ${y} is ${result}`)

//for loop.......

// for(let i=0;i<5;i++){
//      console.log("For loop ");
// }

// for(let i=90;i>8;i=i-9){
//      if(i%2===0)
//      console.log(i);
// }

// let i = 90;

// while(i>8){
//      console.log(i);
//      i=i-9
// }

//while loop

// i = 0;

// while(i<5){
//      console.log("hiiiiiiiiiiiiiiiiiiiiiii");
//      i++;
// }

//for...in

// let person = {
//     name : " Sahil Aktar",
//     age:21
// }

// for(let key in person){
//     console.log(key,person[key])

// }

// //for...of

// let names =["sahil","riju","sumit"];

// for(let name in names){
//     console.log(name, names[name])
// }

// //function...

// function cookmaggi(maggi,pani,tapeli){
//     // console.log("your maggi will be ready in " + maggi*2 + " minutes" + " and ingredients used are " + maggi + " maggi, " + pani + " cups of water, " + tapeli + " pan. " );
//     console.log(`your maggi will be ready in ${maggi*2} minutes and ingredients used are ${maggi} maggi ${pani} cups of water ${tapeli} pan`)

// }

// cookmaggi(2,4,1);

// function greet()
// {

// let alien = {
//     name: 'sahil',
//     age:22,
//     hieght:170,
//     wife: "Ritwika",
//     laptop:{
//         ram:8,
//         cpu:'i7',
//         brand:'acer',
//         'dolby atmos': 'none',
//     },
//     ggg :function() {
//         console.log("hello world")
//     }
// }
// alien.ggg()

// console.log(alien.laptop['dolby atmos'])

// }

// greet()

// for( i=0;i<5;i++){
//     console.log("I Love Ritwika")
// }

// i=1
// while(i<=5){
//     console.log("I Love Ritwika");
//     i++;

// }

// function hey(user,user1)
// {
//     return `hello ${user} ${user1}`
// }
// let user = "sahil"

// let str = hey(user,user1)
// console.log(str);

// function propose(user1,user2,user3)
// {
//     return `i love ${user1} ${user2}`

// }
// let user1 ="Ritwika"
// let user2 ="Sarkar"
// let str1 = propose(user1,user2)
// console.log(str1)

// let add = (num1,num2)=>num1 + num2;

// console.log(add(5,6))

// function greet(u)
// {
//     return `hello ${u}!!`;
// }
// let user = "Ritwika"
// let str = greet(user)
// console.log(str)

// function greet(user)
// {
//     console.log(user);
//     return`hello ${user}`
// }

// let user = 'Ritwika'
// let str = greet(user)
// console.log(str);

// console.log("She is my bubu")
// function expression

// let greet=function(user1,user2,user3,user4){
//     return`${user1} ${user2} weds ${user3} ${user4}`
// }

// let user1 = "Ritwika";
// let user2 = "Sarkar";
// let user3 = "Sahil";
// let user4 = "Aktar";
// let result = greet(user1,user2,user3,user4)

// console.log(result)
// arrow function////////////////////////////////////////////////////////
// let arrow  = (user) => `hello ${user}`

// console.log(arrow("sahil"))

// let f1 = (num10,num11)=> Math.abs(num10) + Math.abs(num11)

// let num10 = 50
// let num11= -51
// let resu = f1(num10,num11)
// alert(resu)

// let a = prompt("what's your age?");
// a= Number.parseInt(a);

// if(a<12){
//     alert("you cannot drive. Go and start reading.");
// }
// else if(a<=18){
//     alert("you can think about driving after 18");

// }

// else{
//     alert("yes you can drive.");
// }

// let a = prompt("enter a number to test")
// a= Number.parseInt(a)
// if(a%2==0 && a%3==0){
//     alert("it is devisible by 2 and 3")
// }
// else{
//     alert("it's not devisible by 2 and 3")
// }

// class person{
//     constructor(name,age){
//     this.name = name;
//     this.age = age;

//     this.relation= function(){
//         console.log("She is my wife!!")
//     }
// }

// }
// let person1 = new person("Ritwika",19)
// let person2 = new person("Sarkar",25)

//  person2.name = "Sahil"

// console.log(person2)
// person1.relation()

// let array1= [1,2,3,4,5,6,7,8,9,10];
// // let array2 = [11,12,13,14,15,16,17,18,19,20];

// // let newArray = array1.concat(array2)
// // console.log(newArray)
// let newArray= array1.slice(2,5)

// console.log(newArray)
// // console.log(array1)

// let compare =(a,b)=>{
//     return b-a;
// }
// let array1 = [545,35,2239,4488,8]

// console.log(array1.sort(compare))

// let name = prompt("enter your name:");

// console.log(name + 'is a good boy');

// let n = prompt("enter a number to check if it is prime or not");

// if(n%2==0){
//     alert("it is  a prime number");
// }
// else{
//     alert("it is not a prime number");
// }

// let person = prompt("enter your age :");
// if(person<18){
//     alert("you cannot enter in a hotel with a girl");
// }
// else if(person<=21){
//     alert("few hotel may allow you stay together");
// }
// else{
//     alert("yes you can stay together");
// }

// let deletPost = confirm("do you want to delete this post?");

// if(deletPost){
//     alert("your post has been deleted");
// }
// else{
//     alert("your post has not been deleted");
// }
// function toggleHide() {
//     let btn = document.getElementById('btn');

//     let para = document.getElementById('para');

//     if (para.style.display != 'none') {
//         para.style.display = 'none';
//     } else {
//         para.style.display = 'block';
//     }

// }

// function displayTime(){
//     let time=new Date();
//     console.log(time);
//     document.getElementById('time').innerHTML=time;
// }

// setInterval(displayTime,1000);

// setTimeout(function(){
//     console.log("hello world");
// },3000)

function loadscript(src) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("script loaded");
  };
  document.body.appendChild(script);
}

loadscript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
);
