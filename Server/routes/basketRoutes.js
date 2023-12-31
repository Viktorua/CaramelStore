const Router = require("express");
const router = new Router();
const basketController = require("../controllers/basketController");

router.post("/add", basketController.addItem);
router.post("/delete", basketController.deleteItem);
router.get("/", basketController.getAll);
router.post("/payment", basketController.payment);

module.exports = router;
