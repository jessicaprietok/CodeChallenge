document.getElementById('datos').addEventListener('submit', function(event){

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fecha = document.getElementById('fecha').value;
    const datos = {
        nombre: nombre,
        apellido: apellido,
        fecha_nacimiento: fecha
    };

    fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor', data);
    })
    .catch(error => {
        console.error('Error', error);
    });


});