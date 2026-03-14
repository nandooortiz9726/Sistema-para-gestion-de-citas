// Esperamos a que el HTML (DOM) termine de cargar completamente
document.addEventListener("DOMContentLoaded", () => {

    // 1. Obtenemos los elementos que necesitamos controlar
    const signUpButton = document.getElementById("go-to-register");
    const signInButton = document.getElementById("go-to-login");
    const authBox = document.querySelector(".auth-box");

    // 2. Evento para ir a Registrarse (Mueve la imagen a la izquierda)
    if (signUpButton) {
        signUpButton.addEventListener("click", (e) => {
            e.preventDefault(); // Evitamos que el enlace recargue la página
            authBox.classList.add("right-panel-active");
        });
    }

    // 3. Evento para ir a Iniciar Sesión (Regresa la imagen a la derecha)
    if (signInButton) {
        signInButton.addEventListener("click", (e) => {
            e.preventDefault();
            authBox.classList.remove("right-panel-active");
        });
    }
});
