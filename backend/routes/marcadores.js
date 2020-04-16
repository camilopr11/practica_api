const express = require("express");
const router = express.Router();
const _controlador = require("../controllers/marcadores");

/**
 * Consultar marcadores
 */
router.get("/marcadores", (req, res) => {
  _controlador
    .consultarMarcadores()
    .then(respuestaDB => {
      let marcador = respuestaDB.rows;
      res.send({ ok: true, info: marcador, mensaje: "Marcadores Consultados" });
    })
    .catch(error => {
      res.send(error);
    });
});

/**
 * Guardar un marcador en la db
 */
router.post("/marcadores", async (req, res) => {
  try {
    let info = await req.body;

    _controlador.validarMarcador(info);

    _controlador
      .guardarMarcador(info)
      .then(respuestaDB => {
        res.send({ ok: true, mensaje: "Marcador guardado", info: info });
      })
      .catch(error => {
        res.send(error);
      });

  } catch (error) {
    res.send(error);
  }
});


/**
 * Eliminar un marcador de la db
 */
router.delete("/marcadores", async (req, res) => {
  let info_eliminar = await req.body;
  _controlador
    .eliminarMarcador(info_eliminar)
    .then((respuestaDB) => {
      let marcadores = respuestaDB;
      res.send({ ok: true, info: marcadores, mensaje: "Marcador eliminado" });
    })
    .catch((error) => {
      res.send(error);
    });

});

module.exports = router
