var express = require("express");
var router = express.Router();

var cartypesController = require("../controllers/cartypes");
/* GET home page. */
router.get("/", cartypesController.getAllPosts);

router.post("/", cartypesController.createAPost);

router.get("/:id/delete", cartypesController.deleteAPost);

// get record details
router.get("/:id/edit", cartypesController.editAPost);

// update record
router.post("/:id/edit", cartypesController.updateAPost);

// http://localhost:3000/cartypes/1/delete

// get post delete
// delete
// update

module.exports = router;
