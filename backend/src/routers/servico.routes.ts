import { getServicos, createNewServico, getServicoByIdHandler } from "../controllers/servico.controller";
import express from 'express';

const router = express.Router();

router.get('/', getServicos);
router.post('/', createNewServico);
router.get('/:id', getServicoByIdHandler);

export default router;