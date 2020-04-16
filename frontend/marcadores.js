/**
 * Este metodo permite validar que los campos de nombre y URL no se dejen vacíos al crear un marcador
 * @param {*} nombre 
 * @param {*} url 
 */
let validarCampos = (nombre, url) => {
    if (nombre == "") {
        return false;
    } else if (url == "") {
        return false;
    } else {
        return true;
    }
};

/**
 * Metodo para crear un marcador
 */
let crearMarcador = () => {
    let nombreFormulario = document.getElementById("nombre").value;
    let urlFormulario = document.getElementById("url").value;
    let descripcionFormulario = document.getElementById("desc").value;
    if (validarCampos(nombreFormulario, urlFormulario)) { 
        params = {
            nombre: nombreFormulario,
            url: urlFormulario,
            descripcion: descripcionFormulario
        };
        axios
            .post("http://localhost:3000/marcadores", params)
            .then((response) => {
                console.log("Marcador ingresado a db");
                console.log(response);
            });
        alert("Marcador creado correctamente")
        nombreFormulario = document.getElementById("nombre").value = "";
        urlFormulario = document.getElementById("url").value = "";
        descripcionFormulario = document.getElementById("desc").value = "";
    } else {
        alert("La URL y el nombre son obligatorios");
    }
};

/**
 * Metodo para consultar los marcadores de la base de datos
 */
var data = [];
let consultarMarcadores = () => {
    axios.get("http://localhost:3000/marcadores").then((response) => {
        console.log("Marcadores consultados");
        console.log(response);
        marcadores = response.data.info;
        console.log(marcadores);
        let lista = document.getElementById("lista");
        let data = "";
        for (let i = 0; i < marcadores.length; i++) {
            let marcador = "";
            marcador = marcadores[i];
            
            data += "<tr>";
            data += `<td>${marcador.id}</td>`;
            data += `<td>${marcador.url}</td>`;
            data += `<td>${marcador.nombre} </td>`;
            data += `<td>${marcador.descripcion} </td>`;
            data += '<td><button type="button" onclick="eliminarMarcador('+marcadores[i].id +')" class="btn btn-danger btn-sm">Eliminar</button> </td>';
            data += "</tr>";
        }
        lista.innerHTML = data;
    });
};

/**
 * Metodo para limpiar los campos del formulario
 */

let limpiarCampos = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("url").value = "";
    document.getElementById("desc").value = "";
}


/**
 * Elimina un marcador deseado
 * @param {*} id 
 */
let eliminarMarcador = (id) => {
    data = {
        id: id,
    };
    axios.delete("http://localhost:3000/marcadores", { data }).then((response) => {
        consultarMarcadores();
    });
    alert("Marcador eliminado");
};

consultarMarcadores();