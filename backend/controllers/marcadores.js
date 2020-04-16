const ServicioPg = require("../services/postgres");

/**
 * Validar informacion del marcador
 * @param {*} marcador 
 */
let validarMarcador = marcador => {
    if (!marcador) {
        throw { ok: false, mensaje: "La información del marcador es obligatoria" };
    } else if (!marcador.nombre) {
        throw { ok: false, mensaje: "El nombre del marcador es obligatorio" };
    } else if (!marcador.url) {
        throw { ok: false, mensaje: "La URL del marcador es obligatoria" };
    }
};

/**
 * Guardar en base de datos un marcador
 * @param {*} marcador 
 */
let guardarMarcador = async (marcador) => {
    let _servicio = new ServicioPg();
    let sql = `INSERT INTO public.marcadores(
        url, nombre, descripcion)
       VALUES (
           '${marcador.url}',
           '${marcador.nombre}',
           '${marcador.descripcion}');`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

/**
 * Consultar marcadores en base de datos
 */
let consultarMarcadores = async () => {
    let _servicio = new ServicioPg();
    let sql = `SELECT (id,url,nombre,descripcion) FROM public.marcadores`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};



module.exports = { validarMarcador, guardarMarcador, consultarMarcadores }