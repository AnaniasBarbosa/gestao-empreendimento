import Servico from "../models/Servico";
import express, { Request, Response } from 'express';
import { getAllServicos } from "../services/servico.service";


async function getServicos(req: Request, res: Response) {
  try {
    const servicos: Servico[] = await getAllServicos();
    res.status(200).json(servicos);
  } catch (error) {
    console.error('Error fetching servicos:', error);
    res.status(500).json({ error: 'Failed to fetch servicos' });
  }
}

export { getServicos };