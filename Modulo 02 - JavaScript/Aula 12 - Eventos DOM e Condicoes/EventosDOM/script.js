let caixa = document.getElementById("mouse1");
let nome = document.querySelector("#nome").value;

function entradaMouse() {
    caixa.style.backgroundColor = "blue";
}

function saidaMouse() {
    caixa.style.backgroundColor = "lightpink"
}

function mudaHtml() {
    let nome = document.querySelector("#nome").value;
    caixa.innerHTML = nome;
}