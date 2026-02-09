import { getServicos, createNewServico } from "../controllers/servico.controller";
import express from 'express';

const router = express.Router();

router.get('/', getServicos);
router.post('/', createNewServico);

export default router;