// Si ya estás registrado…
if (localStorage.getItem('atomicUser')) {
  /* … */
}

document.getElementById('registration-form').addEventListener('submit', e => {
  /* … */
});

/* === Lógica para cotizaciones === */
async function actualizarCotizaciones() {
  /* … */
}
actualizarCotizaciones();
setInterval(actualizarCotizaciones, 60000);
