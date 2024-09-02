const express = require('express');
const { fetchBrands, createBrand,createBrands } = require('../controller/Brand');

const router = express.Router();
//  /brands is already added in base path
router.get('/', fetchBrands).post('/', createBrand);
router.post('/multiplr', createBrands);

exports.router = router;
