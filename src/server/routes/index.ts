import { Router } from "express";
import { StatusCodes } from "http-status-codes"
const router = Router();



router.get('/', (_, res) => {
    return res.send('Olá, Dev!')
});

router.post('/', (req, res) => {
    console.log(req.params);
    return res.status(StatusCodes.UNAUTHORIZED).send(req.body);
});







export { router };