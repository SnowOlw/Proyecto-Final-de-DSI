// Validación para el formulario
function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const cantidad = document.getElementById("cantidad").value;

    if (nombre.trim() === "" || cantidad.trim() === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    if (isNaN(cantidad) || cantidad < 0) {
        alert("La cantidad debe ser un número positivo.");
        return false;
    }

    return true;
}

// Eliminar un producto desde la tabla (simulado)
function eliminarProducto(nombre) {
    const confirmacion = confirm(`¿Desea eliminar el producto "${nombre}"?`);
    if (confirmacion) {
        alert("Producto eliminado (simulado).");
    }
}
