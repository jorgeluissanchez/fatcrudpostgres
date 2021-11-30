const { Router } = require('express');
const router = Router();

const { read, create, readById, updateById, deleteById } = require('../controllers/index.controller.js');

router.get('/users', read);
router.post('/users', create);
router.get('/users/:id', readById);
router.put('/users/:id', updateById)
router.delete('/users/:id', deleteById);

module.exports = router;