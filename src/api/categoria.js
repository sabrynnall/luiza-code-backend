const express = require('express');
const router = express.Router();
const { categorias } = require('../models');
const CategoriaService = require('../services/categorias');

const categoriaService = new CategoriaService(categorias);

router.get('/', async (req, res) => {
  /*
    #swagger.tags = ['Categorias']
    #swagger.description = 'Endpoint para obter as categorias dos produtos.'
  */
  const categorias = await categoriaService.listar()
  res.status(200).json(categorias)
})

module.exports = router