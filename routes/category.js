const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/uploadImage")
const {
    getAll,
    read,
    create,
    update,
    destroy,
    addProducts
} = require('../controllers/category');

router.post("/create" , uploadMiddleware('category').single('image'), create);
router.post("/update/:id" , uploadMiddleware('category').single('image'), update);
router.delete("/destroy/:id", destroy);
router.get("/read/:id", read);
router.get("/", getAll);
router.post("/addProducts/:slug", addProducts);

module.exports = router;
