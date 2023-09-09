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


document.getElementById('datos').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fecha = document.getElementById('fecha').value;
    const datos = {
        nombre: nombre,
        apellido: apellido,
        fecha_nacimiento: fecha
    };


    const URL = "https://jsonplaceholder.typicode.com/users";

    const solicitudPost = {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch(URL, solicitudPost)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo enviar la data");
            }
            return response.json();
        })
        .then(data => {
            console.log("Nuevo usuario creado", data);
            alert("¡La solicitud se realizó correctamente!");
            document.getElementById('fname').value = '';
            document.getElementById('lname').value = '';
            document.getElementById('bday').value = '2011-11-22';
        })
        .catch(error => {
            console.error("Error", error);
        });
});
