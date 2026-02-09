import { getServicos, createNewServico, getServicoByIdHandler, updateServicoHandler } from "../controllers/servico.controller";
import express from 'express';

const router = express.Router();

router.get('/', getServicos);
router.post('/', createNewServico);
router.put('/:id', updateServicoHandler);
router.get('/:id', getServicoByIdHandler);

export default router;