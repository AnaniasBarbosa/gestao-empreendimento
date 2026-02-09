import { getAtendimentosHandler } from "../controllers/atendimento.crontroller";
import express from 'express';

const router = express.Router();

router.get('/', getAtendimentosHandler);

export default router;