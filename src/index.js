let batman = document.getElementById("batman");
let batman2 = document.getElementById("batman2");
let superman = document.getElementById("superman");
let superman2 = document.getElementById("superman2");


let batmanBtn = () => {
    batman.classList.remove("imgv");
    batman2.classList.add("imgv");
    superman.classList.add("imgv");
    superman2.classList.add("imgv");
};

let batman2Btn = () => {
    batman2.classList.remove("imgv");
    batman.classList.add("imgv");
    superman.classList.add("imgv");
    superman2.classList.add("imgv");
};

let supermanBtn = () => {
    superman.classList.remove("imgv");
    batman2.classList.add("imgv");
    batman.classList.add("imgv");
    superman2.classList.add("imgv");
};

let superman2Btn = () => {
    superman2.classList.remove("imgv");
    batman2.classList.add("imgv");
    superman.classList.add("imgv");
    batman.classList.add("imgv");
};


batmanBtn();
