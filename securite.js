// Bloquer le clic droit de la souris
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Bloquer les raccourcis clavier de triche (F12, Ctrl+Maj+I, Ctrl+Maj+J, Ctrl+U)
document.addEventListener('keydown', function(e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "i" || e.key === "j")) ||
        (e.ctrlKey && (e.key === "U" || e.key === "u"))
    ) {
        e.preventDefault();
    }
});
