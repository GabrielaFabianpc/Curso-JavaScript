function contar() {
  let numero = document.getElementById("nmr");
  let tabuada = document.getElementById("tabuada");
  if (numero.value.length == 0) {
    window.alert("Por favor, digite um número!");
  } else {
    let n = Number(numero.value);
    let c = 1;
    tabuada.innerHTML = "";
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      tabuada.appendChild(item);
      c++;
    }
  }
}
