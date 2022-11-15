function mostrar() {
  let idade = document.getElementById("idade");
  let msg = document.getElementById("msg");
  let idadee = Number(idade.value);
  if (idadee == 0) {
    window.alert("Por favor, digite um número!");
  } else if (idadee <= 12) {
    msg.innerHTML = "Você é uma Criança!";
  } else if (idadee < 18) {
    msg.innerHTML = "Você é um Adolescente!";
  } else if (idadee < 60) {
    msg.innerHTML = "Você é um Adulto!";
  } else if (idadee < 100) {
    msg.innerHTML = "Você é bem Vivido!";
  }
}
