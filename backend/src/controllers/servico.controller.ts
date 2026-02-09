import Servico from "../models/Servico";
import { Request, Response } from 'express';
import { getAllServicos, createServico, getServicoById } from "../services/servico.service";
import { validateCreateServicoDTO } from "../validators/servico.validator";
import CreateServicoDTO from "../dtos/CreateServicoDTO";

interface ReqParams {
  id: string;
}

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

async function getServicoByIdHandler(req: Request<ReqParams>, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }
    const servico: Servico | null = await getServicoById(id);

    if (!servico) {
      return res.status(404).json({ error: 'Servico not found' });
    }

    res.status(200).json(servico);
  } catch (error) {
    console.error('Error fetching servico by ID:', error);
    res.status(500).json({ error: 'Failed to fetch servico' });
  }
}

export { getServicos, createNewServico, getServicoByIdHandler };