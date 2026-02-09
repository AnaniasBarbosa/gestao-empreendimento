import CreateAtendimentoDTO from "../dtos/CreateAtendimentoDTO";
import Atendimento from "../models/Atendimento";
import { Request, Response } from "express";
import { getAllAtendimentos } from "../services/atendimento.service";

async function getAtendimentosHandler(req: Request, res: Response): Promise<Response> {
  try {
    const atendimentos: Atendimento[] = await getAllAtendimentos();
    return res.status(200).json(atendimentos);
  } catch (error) {
    console.error("Erro ao obter atendimentos:", error);
    return res.status(500).json({ error: "Erro ao obter atendimentos" });
  }
}

export { getAtendimentosHandler };
