
function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://github.com/arthurnatureza/");//nova aba
    window.location.href = "https://github.com/arthurnatureza/";//mesma página
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
    //alert("Trocar texto.");
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";  
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada.");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

function validaIdade(idade){
    let validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

let idade = prompt("Qual sua idade? ");

alert(soma(5, parseInt(idade, 10)));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

if(validaIdade(idade) === true){
    alert("Maior de idade.");
}else{
    alert("Menor de idade.");
}*/


/*let data = new Date();
console.log(data);
console.log("Data: " + data.toLocaleDateString());
console.log("Dia: " + (data.getDay()-1));//O dia é contado cheio, o que estamos +1 que está passando, por isso o -1
console.log("Mês: " + (data.getMonth()+1)); //O mês é contado a partir de 0, por isso o +1
console.log("Ano: " + data.getFullYear());
console.log("Hora: " + data.toLocaleTimeString());
console.log("Horas: " + data.getHours());
console.log("Minutos: " + data.getMinutes());
console.log("Segundos: " + data.getSeconds());*/


/*let count=0;
while (count < 5){
    console.log("No while: " + count);
    count++;
}
for(count=0; count < 5; count++){
    console.log("No for: " + count);
}*/


/*let idade = prompt("Qual sua idade? ");
if(idade>=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}*/


/*let frutas = [{nome: "maçã", cor:"vermelha"}, {nome:"uva", cor:"vermelha"}];
console.log(frutas);
alert(frutas[1].nome);*/


/*let fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);*/


/*let lista = ["maçã", "pêra", "laranja"];
alert(lista[1]);
console.log(lista[0]);
lista.push("uva");
console.log(lista.length);
console.log(lista);
console.log(lista.reverse());
lista.reverse()
alert(lista[3]);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.toString());
console.log(lista.join(" - "));*/


/*let nome = "Arthur Natureza";
let idade = 30, idade2 = 10;
let frase = "Japão é o melhor time do mundo";
alert("Meu primeiro js");
alert("Bem vindo " + nome);
alert(nome + " tem " + idade + " anos.");
alert(idade + idade2)
alert(frase);
alert(frase.replace("Japão", "Brasil"));
alert(frase.toUpperCase());
alert(frase.toLowerCase());*/