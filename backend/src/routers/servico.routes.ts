import { getServicos } from "../controllers/servico.controller";
import express from 'express';

const router = express.Router();

router.get('/', getServicos);

export default router;