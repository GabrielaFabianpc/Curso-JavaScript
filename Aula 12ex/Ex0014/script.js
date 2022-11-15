function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let msgg = document.getElementById("msgg");
  let data = new Date();
  let hora = data.getHours();
  let minutos = data.getMinutes();
  let dataa = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();
  //let hora = 20;
  //let dataa = 3;
  msg.innerHTML = `Hoje é  dia ${dataa} do mês ${mes} e do ano ${ano}!`;
  msgg.innerHTML = `E agora são ${hora} horas e ${minutos} minutos!`;
  if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = "manhã.jpg";
    document.body.style.background = "#babab8";
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = "tarde.jpg";
    document.body.style.background = "#e27115";
  } else {
    //BOA NOITE!
    img.src = "noite.jpg";
    document.body.style.background = "#252422";
  }
}
