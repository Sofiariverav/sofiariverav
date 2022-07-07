let nombre;
let cantidad= 0;
let salario= 0;
let extras= 0;

let formulario = document.getElementById('form');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    LeerDatos()
})

function LeerDatos() {
    nombre = document.getElementById('Nombre').value
    cantidad = Number(document.getElementById('Cantidad').value)
    ValidarData(nombre, cantidad)
}

function ValidarData(nombre,cantidad) {
    if ( isNaN(nombre)== false || isNaN(cantidad)== true || nombre.length== 0 || cantidad<0 ) {
        swal("Error de Información", "Ooops!", "Error");
    }
    else {
        calcular(cantidad)
    }
}

function calcular(cantidad) {
    if(cantidad>0 && cantidad<=40){
        salario = cantidad*8000;
        document.getElementById('Salario').value = salario;
        document.getElementById('SalarioExtra').value = 0;
        document.getElementById('Total').value = salario;
    }
    else{
        extras = cantidad - 40;
        salario = (extras*12000) + (40*8000)
        document.getElementById('Salario').value = 40*8000;
        document.getElementById('SalarioExtra').value = extras*12000;
        document.getElementById('Total').value = salario;
    }
}

