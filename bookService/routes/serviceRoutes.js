const express = require('express');
const router = express.Router();
const  controller = require('../controller/serviceController');


router.get("/",controller.getAll);
router.get("/:id",controller.getOne);
router.put('/:id',controller.updateOne);
router.post('/',controller.createOne);
router.delete('/:id',controller.deleteOne);




module.exports = router;
