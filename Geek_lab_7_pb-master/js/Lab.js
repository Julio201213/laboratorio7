var usuario;

function Capturar() {
    class Persona {
        constructor(nombre, apellido, fecha, direccion, ciudad, telefono, correo) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.fecha = fecha;
            this.direccion = direccion;
            this.ciudad = ciudad;
            this.telefono = telefono;
            this.correo = correo


        }
    }
    var nombreRegistro = document.getElementById('nombre').value;
    var apellidoRegistro = document.getElementById('apellido').value;
    var fechaRegistro = document.getElementById('fecha').value;
    var direccionRegistro = document.getElementById('direccion').value;
    var ciudadRegistro = document.getElementById('ciudad').value;
    var telefonoRegistro = document.getElementById('telefono').value;
    var correoRegistro = document.getElementById('correo').value;

    usuario = new Persona(nombreRegistro, apellidoRegistro, fechaRegistro, direccionRegistro, ciudadRegistro, telefonoRegistro, correoRegistro);

    RegistrarUsuario(usuario);
}

var personas = [];

function RegistrarUsuario(usuario) {
    personas.push(usuario);
    console.log(personas)
    document.getElementById('tabla').innerHTML += '<tbody><td>' + usuario.nombre + '</td><td>' + usuario.apellido + '</td><td>' + usuario.fecha + '</td><td>' + usuario.direccion + '</td><td>' + usuario.ciudad + '</td><td>' + usuario.telefono + '</td><td>' + usuario.correo + '</td>  </tbody>'
}
