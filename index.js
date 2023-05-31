//USO DE VARIABLES Y PROMPT EN TODO EL CODIGO
//USO DE WHILE / IF/ELSE / iNGRESAR USUARIO CORRECTO REGISTRADO
let ingreso = "";
let pass = "";
let error = false;

while(ingreso != "ADMIN" || pass != "3212"){

    if(error){
        alert("usuario incorrecto, reingrese su usuario")
    }else{
        error = true;
    }
 
    ingreso = prompt("Ingresa el admin")
    pass = prompt("Ingresa la contraseña")
}

//USO DE SWITCH/ FUNCTION / ELECCION DE HORARIOS E INCORPORACION DE NUEVOS HORARIOS
    let horario = prompt("\n 1-10:00 AM \n 2-16:00 \n 3-18:00 \n 4-SALIR \n 5-Nuevo")

    switch(horario){
        case "1": 
            alert("Tu horario es de 4 horas continuas")
            break;
        case "2":
            alert("Tu horario es de 2 horas continuas")
            break;
        case "3":
            alert("Tu horario es de 3 horas continuas")
            break;
        case "4":
            break;
        case "5":
                let hora = prompt("Ingresa el HORARIO NUEVO")
                let tiempo = prompt("Ingresa HORAS LABURADAS")
                alert("Tu horario sera:" + construirHorario(hora,tiempo));
                break;
        default:
            alert("Estas sin registro, la opcion ingresa es invalida. " + retornarOpcion(horario))
            break;
    }
    salir = "ESC";

alert("Se termino!");

function construirHorario(hora,tiempo){
    return hora + " con" + " " + tiempo + " horas continuas.";
}
function retornarOpcion(opcion){
    switch(opcion){
        default:
            return "Su opcion fue: "+ opcion;
    }
}



//INTENTOS ANTES DE LLEGAR AL FINAL
/*
do{
    ingreso = prompt("Ingresa el admin")
    pass = prompt("Ingresala contraseña")

}while(ingreso != "ADMIN" && pass != "3212")
*/
/*
let ingreso = prompt("ADMIN")
let pass = prompt("Pass")

if(ingreso === "INKToo" && pass === "3212"){
    alert ("Bienvenido al Laburo");
}else{
    alert ("ACCESO RESTRINGIDO") ;
}

//USO DE WHILE/SWITCH 
//CONTROL DE HORARIOS TRABAJADORES
let horario = prompt("\n 1-10:00 AM \n 2-16:00 \n 3-18:00 \n 4-SALIR")

while (horario != 1, horario != 2, horario != 3, horario != 4){
    switch(horario){
        case "1": 
            alert("Tu horario es de 4 horas continuas")
            break;

        case "2":
            alert("Tu hoario es de 2 horas continuas")
            break;

        case "3":
            alert("Tu horario es de 3 horas continuas")

        case "4":
            default:
                alert("Estas sin registro")
                break;
    }

}

//FUNCTION 
/*const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva   = x => x * 0.21;*/
