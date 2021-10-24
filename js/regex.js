function validarFormulario(input){
    //Obtenemos todos los input
    //let input = document.getElementsByTagName('input');
    let i;
    let bool = true;
    //Utilizaremos la propiedad de bootstrap is-valid o is-invalid
    //para mostrar si un campo es incorrecto en el formulario

    //Primero revisamos que no esten vacios
    for(i=0; i<input.length; i++){
        //Validamos que cada campo no este vacio
        if(noEstaVacio(input[i])){
            bool = validarCampo(input[i],i);
        }
        else {
            bool = false;
        }
    }

    return bool;
   
};

function noEstaVacio(campo){
    let valor = campo.value;

    if(valor.length==0 || valor == ""){
        campo.classList.add("is-invalid");
        return false;
    }
    return true;
};

function validarCampo(campo,pos){
    let string;
    switch(pos){
        //Validar el campo Nombre y Apellido
        case 0: case 1:
            string = /^[A-z][A-z ]+$/;
            if(string.test(campo.value)){
                campo.classList.add("is-valid");
                return true;
            }
            else {
                campo.classList.add("is-invalid");
                return false;
            }
            ;
        break;

        //Validar el campo Correo Electrónico
        case 2:
            string = /^[a-z]\w{5,}\@[a-z0-9]{3,8}\.[a-z]{2,3}$/;
            if(string.test(campo.value)){
                campo.classList.add("is-valid");
                return true;
            }
            else {
                campo.classList.add("is-invalid");
                return false;
            }
            ;
        break;

        //Validar el campo Teléfono
        case 3:
            string = /^[2|6|7]\d{3}-\d{4}$/;
            if(string.test(campo.value)){
                campo.classList.add("is-valid");
                return true;
            }
            else {
                campo.classList.add("is-invalid");
                return false;
            }
            ;
        break;

        //Validar el campo DUI
        case 4:
            string = /^[0-6]\d{7}-\d{1}$/;
            if(string.test(campo.value)){
                campo.classList.add("is-valid");
                return true;
            }
            else {
                campo.classList.add("is-invalid");
                return false;
            }
        break;

    }
};