let btn1 =  document.querySelector("input");

let unordonedList = document.querySelector("ul");

btn1.addEventListener("click", ()=>{
    unordonedList.removeChild(unordonedList.firstElementChild);
});

//2
let btn2 =  document.querySelectorAll("input")[1];
btn2.addEventListener("click", ()=>{
    unordonedList.removeChild(unordonedList.lastElementChild);
});

//3
let btn3 =  document.querySelectorAll("input")[2];
btn3.addEventListener("click", ()=>{
    let rand = Math.floor(Math.random() * unordonedList.children.length);
    console.log(rand);
    unordonedList.removeChild(unordonedList.children[rand]);
});

//4
let newSecondLi = document.createElement("li");
newSecondLi.innerText="EXO4";

let btn4 = document.querySelectorAll("input")[3];

let unordonedList2 = document.querySelectorAll("ul")[1];

btn4.addEventListener("click", ()=>{
    unordonedList2.replaceChild(newSecondLi,unordonedList2.children.item(1))
});

//5
let btn5 = document.querySelectorAll("input")[5];
let input2 = document.querySelectorAll("input")[4];

btn5.addEventListener("click", ()=>{
    let newThirdLi = document.createElement("li");
    let value = input2.value;
    newThirdLi.innerText=value;

    unordonedList2.replaceChild(newThirdLi,unordonedList2.children.item(2))
}); 