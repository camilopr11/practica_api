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

module.exports = router