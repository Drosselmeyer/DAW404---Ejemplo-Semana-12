$(function(){
    // Get/obtener datos del servidor
    var botonLlenar = document.getElementById('llenarTabla');
    
    //Metodo al dar clic al boton llenar Tabla
    botonLlenar.addEventListener('click',getAjax);

    //Enviar datos al servidor
    var botonRegistro = document.getElementById('nuevoRegistro');

    //Metodo al dar clic al boton llenar Tabla
    botonRegistro.addEventListener('click',function(event){
        
        event.preventDefault();

        let input = document.getElementsByTagName('input');
        //console.log(input);
        //Validar formulario antes de armar JSON
        if(validarFormulario(input)){
            let data = JSON.stringify({
                nombre: input[0].value,
                apellido: input[1].value,
                correo: input[2].value,
                telefono: input[3].value,
                dui: input[4].value
            });

            console.log(data);
            //console.log(data);
            postAjax(data);
        }
        
    });


    //Función para hacer POST al servidor
    function postAjax(data){
        //console.log(data);
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.open('POST',"/UDB/DAW404/Semana 12/Ejemplo Semana 12/php/Guardar.php",true);
        xmlhttp.setRequestHeader('X-Requested-With','XMLHttpRequest');
        xmlhttp.setRequestHeader('Content-Type','application/json');
        xmlhttp.send(data);
        
        var botonLlenar = document.getElementById('llenarTabla');
        botonLlenar.click();
    }


    //Funcion para obtener los datos y luego dibujar la tabla
    function getAjax(){
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function(){
            
            if(xmlhttp.readyState == XMLHttpRequest.DONE){ //XMLHttpRequest.DONE == 4
                
                if(xmlhttp.status == 200){
                   
                    //Capturamos el objeto de respuesta
                    var res = JSON.parse(xmlhttp.response);
                    dibujarTabla(res);

                }
                else if (xmlhttp.status == 400){
                    console.log("Error de servidor");
                }
                else {
                    console.log("Error: "+xmlhttp.statusText+xmlhttp.status);
                }
            }
        };

        xmlhttp.open("GET","/UDB/DAW404/Semana 12/Ejemplo Semana 12/php/Leer.php",true);
        xmlhttp.send();
    };

    
    //Función para dibujar la tabla
    function dibujarTabla(res){
         //Obtenemos el cuerpo de la tabla
         var tableBody = document.getElementById('tableBody');
         //Limpiamos el html interno
         tableBody.innerHTML='';
         
         //Mostramos el objeto
         console.log(res);

         //Ciclo for para llenar la tabla
         for(let i=0;i<res.length;i++){ 
             //Filas
             let tr = document.createElement('tr');

             //Id
             let tdId = document.createElement('td');
             tdId.classList = "col";
             tdId.innerHTML = res[i].id;
             tr.appendChild(tdId);

             //Nombre
             let tdNom = document.createElement('td');
             tdNom.classList = "col";
             tdNom.innerHTML = res[i].nombre;
             tr.appendChild(tdNom);

             //Apellido
             let tdApe = document.createElement('td');
             tdApe.classList = "col";
             tdApe.innerHTML = res[i].apellido;
             tr.appendChild(tdApe);

             //Correo
             let tdCo = document.createElement('td');
             tdCo.classList = "col";
             tdCo.innerHTML = String(res[i].correo);
             tr.appendChild(tdCo);

             //Telefono
             let tdTel = document.createElement('td');
             tdTel.classList = "col";
             tdTel.innerHTML = String(res[i].telefono);
             tr.appendChild(tdTel);

             //Dui
             let tdDui = document.createElement('td');
             tdDui.classList = "col";
             tdDui.innerHTML = res[i].dui;
             tr.appendChild(tdDui);

             tableBody.appendChild(tr);

             limpiar();
         }
    };

    //Funcion para limpiar el formulario
    function limpiar(){
        let input = document.getElementsByTagName('input');
        
        for(i=0; i<input.length; i++){
            //Limpiamos los campos
            input[i].value='';
            input[i].classList.remove("is-valid","is-invalid")
        }
    };

});