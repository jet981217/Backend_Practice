"use strirct"

const id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    loginbt = document.querySelector("button");

loginbt.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        pw : pw.value,
    };

}