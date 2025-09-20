document.body.style.backgroundColor = "linear-gradient(to right, blue, red)";
document.body.style.color = "white";

// window.alert("Seja Bem Vindo!")

// window.prompt("Login");
// window.prompt("Senha");

// window.confirm("Site com AIDS");

let paragrafo1 = document.getElementsByTagName("p")[0]
paragrafo1.innerText = "Usando o TAG NAME"
paragrafo1.style.background = "blue";

let paragrafo2 = document.getElementById("caixa2")
paragrafo2.innerText = "Caixa 2 Versao 2"
paragrafo2.style.background = "red";
paragrafo2.style.color = "black";

let paragrafo3 = document.getElementsByClassName("caixa3")[0];
paragrafo3.style.background = "green";

// document.getElementByName("nome")[0] para acessar o input

let paragrafo4 = document.querySelector("#paragrafo4")
paragrafo4.innerText = "Caixa 4 Versao 2"
paragrafo4.style.background = "yellow";

let paragrafo5 = document.querySelectorAll(".caixa5")[1]
paragrafo5.innerText = "Caixa 5 Versao 2"
paragrafo5.style.background = "purple";

let paragrafo6 = document.querySelectorAll("p")[4]
paragrafo6.innerText = "Caixa 5 Versao 3"
paragrafo6.style.background = "pink";