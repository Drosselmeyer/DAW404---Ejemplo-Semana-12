$(document).ready(function () {
    //Enviar datos al servidor
    $('#nuevoRegistro').on('click', function (event) {
        //Prevenimos que se envie el formulario y recargue la pagina
        event.preventDefault();

        let input = $('input');
        //Validar formulario antes de armar JSON
        if (validarFormulario(input)) {
            //Metodo jQuery para POST con Ajax
            $.ajax({
                url: '/UDB/DAW404/Semana 12/Ejemplo Semana 12/php/Guardar.php',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    nombre: input[0].value,
                    apellido: input[1].value,
                    correo: input[2].value,
                    telefono: input[3].value,
                    dui: input[4].value
                }),
                success: function (response) {
                    console.log(response);
                    limpiar(input);
                    $('#llenarTabla').click();
                }
            });
        };
    });


    // Get/obtener datos del servidor con jQuery
    $('#llenarTabla').on('click', function () {
        $.ajax({
            url: '/UDB/DAW404/Semana 12/Ejemplo Semana 12/php/Leer.php',
            method: 'GET',
            contentType: 'application/json',
            success: function (response) {
                dibujarTabla(JSON.parse(response));
            }
        });
    });

    //Función para dibujar la tabla
    function dibujarTabla(res) {
        //Obtenemos el cuerpo de la tabla
        var tableBody = $('#tableBody');
        //Limpiamos el html interno
        tableBody.html('');

        console.log(res);

        //Ciclo for para llenar la tabla
        for (let i = 0; i < res.length; i++) {
            //Con jQuery podemos crear un elemento utilzando
            //$('descripcion del elemento completo')
            let tr = $('<tr class="filas"></tr>');
            //Id
            let tdId = $('<td class="col"></td>').html(res[i].id);
            tr.append(tdId); //append es similar a appendChild en JavaScript Vainilla
            //Nombre
            let tdNom = $('<td class="col"></td>').html(res[i].nombre);
            tr.append(tdNom);
            //Apellido
            let tdApe = $('<td class="col"></td>').html(res[i].apellido);
            tr.append(tdApe);
            //Correo
            let tdCo = $('<td class="col"></td>').html(String(res[i].correo));
            tr.append(tdCo);
            //Telefono
            let tdTel = $('<td class="col"></td>').html(String(res[i].telefono));
            tr.append(tdTel);
            //Dui
            let tdDui = $('<td class="col"></td>').html(res[i].dui);
            tr.append(tdDui);

            //Agregarmos el tr al tbody
            tableBody.append(tr);
        }
    };

    //Funcion para limpiar el formulario
    function limpiar(input) {
        input.each(function() {
            //Limpiamos los campos
            input.val('');
            //Removemos las clases utilizadas en el validar
            input.removeClass("is-valid", "is-invalid")
        })
    };

});