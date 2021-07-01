const express = require("express");

const router = express.Router();

// middlewares
const { authCheck} = require("../middlewares/auth");

// controller
const { upload, remove } =  require("../controllers/cloudinary");

router.post("/uploadimage", upload);
router.post("/removeimage", remove);

module.exports = router;