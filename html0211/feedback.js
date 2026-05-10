document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const nombre = urlParams.get('nombre');
    const apellido = urlParams.get('apellido');
    const residente = urlParams.get('residente');

    const titulo = document.getElementById('feedback-titulo');
    const mensaje = document.getElementById('feedback-mensaje');

    if (nombre) {

        titulo.textContent = `¡Ya estás participando, ${nombre}!`;

        if (residente === 'si') {
            mensaje.textContent = `¡Qué bueno que un platense como vos se sume! Te esperamos el 14 de Noviembre en nuestra sede de calle 49 e/ 7 y 8 para dejar tu mensaje a la ciudad.`;
        } else if (residente === 'no') {
            mensaje.textContent = `¡Gracias por sumarte desde afuera de La Plata! Te esperamos el 14 de Noviembre en nuestra sede de calle 49 e/ 7 y 8 para que compartas tu mensaje con nosotros.`;
        }
    }
});
