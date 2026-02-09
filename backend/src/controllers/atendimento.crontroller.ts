import CreateAtendimentoDTO from "../dtos/CreateAtendimentoDTO";
import Atendimento from "../models/Atendimento";
import { Request, Response } from "express";
import { getAllAtendimentos, getAtendimentoById } from "../services/atendimento.service";

interface queryParams {
  id: string;
}

async function getAtendimentosHandler(req: Request, res: Response): Promise<Response> {
  try {
    const atendimentos: Atendimento[] = await getAllAtendimentos();
    return res.status(200).json(atendimentos);
  } catch (error) {
    console.error("Erro ao obter atendimentos:", error);
    return res.status(500).json({ error: "Erro ao obter atendimentos" });
  }
}

async function getAtendimentoByIdHandler(req: Request<queryParams>, res: Response): Promise<Response> {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: "ID inválido" });
  }

  try {
    const atendimento: Atendimento | null = await getAtendimentoById(id);
    if (!atendimento) {
      return res.status(404).json({ error: "Atendimento não encontrado" });
    }
    return res.status(200).json(atendimento);
  } catch (error) {
    console.error("Erro ao obter atendimento por ID:", error);
    return res.status(500).json({ error: "Erro ao obter atendimento por ID" });
  }
}


export { getAtendimentosHandler, getAtendimentoByIdHandler };
