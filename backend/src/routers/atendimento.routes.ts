import { getAtendimentoByIdHandler, getAtendimentosHandler,  } from "../controllers/atendimento.crontroller";
import express from 'express';

const router = express.Router();

router.get('/', getAtendimentosHandler);
router.get('/:id', getAtendimentoByIdHandler);

export default router;