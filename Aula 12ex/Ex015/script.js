function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let formularioAno = document.getElementById("txtano");
  let res = document.querySelector("div#res");
  if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
    window.alert("[ERRO]Verifique os dados e tente novamente!");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(formularioAno.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "bbmenino.jpg");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "homemjovem.jpg");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "homemadulto.jpg");
      } else {
        //Idoso
        img.setAttribute("src", "velho.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute("src", "bbmenina.jpg");
      } else if (idade < 21) {
        //Jovem
        img.setAttribute("src", "mulherjovem.jpg");
      } else if (idade < 50) {
        //Adulto
        img.setAttribute("src", "mulheradulta.jpg");
      } else {
        //Idoso
        img.setAttribute("src", "velha.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `<p>Detectamos: ${genero} com ${idade} anos.</p>`;
    res.appendChild(img); //codigo de adicionar elemento
  }
}
