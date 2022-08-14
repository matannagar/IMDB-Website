const express = require('express')

const router = express.Router();
const imdbController = require('../controllers/imdbController')

router.get('/getFEATURED/', imdbController.getFeatured);
router.get('/getSearch', imdbController.getSearch)



export default router;
