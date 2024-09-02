const express = require('express');
const { fetchCategories, createCategory, createCategories } = require('../controller/Category');

const router = express.Router();
//  /categories is already added in base path
router.get('/', fetchCategories).post('/',createCategory)
router.post('/multiplr',createCategories)

exports.router = router;
