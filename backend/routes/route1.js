import express from 'express';

import { handleGET, handleGETALL, handlePOST, handlePUT, handleDELETE } from '../controllers/controller1';

const router = express.Router();

/* Here you put all the routers. for example:*/
router.get('/', handleGETALL);
router.get('/:id', handleGET);
router.post('/:id', handlePOST);
router.put('/:id', handlePUT);
router.delete('/:id', handleDELETE);

export default router;