function resumen() {
  let valorTickets = 200;
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let correo = document.getElementById("correo").value;
  let cantidad = document.getElementById("cantidad").value;
  let categoria = parseInt(document.getElementById("categoria").value);
  let total1 = document.getElementById("total");

  let precioSinDescuento = valorTickets * cantidad;
  let descuento = (precioSinDescuento * categoria) / 100;
  let precioFinal = precioSinDescuento - descuento;
  total1.innerText = Number(precioFinal);
}
