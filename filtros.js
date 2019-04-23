function main()
{
  //imagen original
  var img = document.getElementById('imagesrc')

  //imagen a filtar
  var canvas = document.getElementById('display');
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0,0);

  //boton filtro blanco y negro
  var boton_filtro_grises = document.getElementById('blancoynegro');

  //filtro blanco y blancoynegro

  boton_filtro_grises.onclick = () => {
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
    for (var i = 0; i < data.length; i+=4) {
      brillo = (3 * data[i] + 4 * data[i+1] + data[i+2])/8
      data[i] = brillo;
      data[i+1] = brillo;
      data[i+2] = brillo;
    }
    ctx.putImageData(imgData, 0, 0);
  }

  //deslizador rojo
  deslizador_rojo = document.getElementById('deslizador_rojo')
  display_rojo = document.getElementById('display_rojo')
  deslizador_rojo.oninput = () => {
    display_rojo.innerHTML = deslizador_rojo.value
    ctx.drawImage(img, 0,0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
    for (var i = 0; i < data.length; i+=4) {
      if (data[i] > deslizador_rojo.value)
        data[i] = deslizador_rojo.value;

      if (data[i+1] > deslizador_verde.value)
        data[i+1] = deslizador_verde.value;

      if (data[i+2] > deslizador_azul.value)
        data[i+2] = deslizador_azul.value;
    }
    ctx.putImageData(imgData, 0, 0);
  }

  //deslizador verde
  deslizador_verde = document.getElementById('deslizador_verde')
  display_verde = document.getElementById('display_verde')
  deslizador_verde.oninput = () => {
    display_verde.innerHTML = deslizador_verde.value
    ctx.drawImage(img, 0,0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
    for (var i = 0; i < data.length; i+=4) {
      if (data[i+1] > deslizador_verde.value)
        data[i+1] = deslizador_verde.value;

      if (data[i] > deslizador_rojo.value)
        data[i] = deslizador_rojo.value;

      if (data[i+2] > deslizador_azul.value)
        data[i+2] = deslizador_azul.value;
    }
    ctx.putImageData(imgData, 0, 0);
  }

  //deslizador azul
  deslizador_azul = document.getElementById('deslizador_azul')
  display_azul = document.getElementById('display_azul')
  deslizador_azul.oninput = () => {
    display_azul.innerHTML = deslizador_azul.value
    ctx.drawImage(img, 0,0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
    for (var i = 0; i < data.length; i+=4) {
      if (data[i+1] > deslizador_verde.value)
        data[i+1] = deslizador_verde.value;

      if (data[i] > deslizador_rojo.value)
        data[i] = deslizador_rojo.value;

      if (data[i+2] > deslizador_azul.value)
        data[i+2] = deslizador_azul.value;
    }
    ctx.putImageData(imgData, 0, 0);
  }


}
