function resultado() {
  let numero = document.getElementById("valor");
  let tabuada = document.getElementById("tabuada");
  if (numero.value.length == 0) {
    window.alert("Por favor, digite um número!");
  } else {
    let n = Number(numero.value);
    tabuada.innerHTML = "";
    for (let c = 1; c <= 10; c++) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      tabuada.appendChild(item);
    }
  }
}
