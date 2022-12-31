const data = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]
let box1 = document.querySelector(".row1");
    box1.style.height =(data[0].amount * 4) + "px";
let box2 = document.querySelector(".row2");
    box2.style.height =(data[1].amount * 4) + "px";
let box3 = document.querySelector(".row3");
    box3.style.height =(data[2].amount * 4) + "px";
let box4 = document.querySelector(".row4");
    box4.style.height =(data[3].amount * 4) + "px";
let box5 = document.querySelector(".row5");
    box5.style.height =(data[4].amount * 4) + "px";
let box6 = document.querySelector(".row6");
    box6.style.height =(data[5].amount * 4) + "px";
let box7 = document.querySelector(".row7");
    box7.style.height =(data[6].amount * 4) + "px";

let myArr = [box1, box2, box3, box4, box5, box6, box7];
    myArr.forEach(item => {
        item.addEventListener("mouseover", function(e){
            let tall = e.target.getBoundingClientRect();
            let numHeight = tall.height / 4;
            let result = numHeight.toFixed(2);
            let div = document.querySelector(".box");
            e.target.parentElement.prepend(div);
            div.innerHTML = result;
            div.style.display = "block";
        })
    })