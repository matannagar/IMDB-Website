import express from 'express'

const router = express.Router();
const imdbController = require('../controllers/imdbController')
router.get('/', imdbController.getTopMovies);



export default router;
