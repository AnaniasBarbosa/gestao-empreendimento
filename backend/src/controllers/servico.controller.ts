import Servico from "../models/Servico";
import { Request, Response } from 'express';
import { getAllServicos, createServico  } from "../services/servico.service";
import { validateCreateServicoDTO } from "../validators/servico.validator";
import CreateServicoDTO from "../dtos/CreateServicoDTO";


async function getServicos(req: Request, res: Response) {
  try {
    const servicos: Servico[] = await getAllServicos();
    res.status(200).json(servicos);
  } catch (error) {
    console.error('Error fetching servicos:', error);
    res.status(500).json({ error: 'Failed to fetch servicos' });
  }
}

async function createNewServico(req: Request, res: Response) {
  try {
    const data: CreateServicoDTO = req.body;
    const { valid, errors } = validateCreateServicoDTO(data);
    if (!valid) {
      return res.status(400).json({ errors });
    }
    
    const newServico: CreateServicoDTO = await createServico(data);
    res.status(201).json(newServico);
    
  } catch (error) {
    console.error('Error creating servico:', error);
    res.status(500).json({ error: 'Failed to create servico' });
  }
}

export { getServicos, createNewServico };