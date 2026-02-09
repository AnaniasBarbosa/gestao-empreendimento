import CreateAtendimentoTDO from "../dtos/CreateAtendimentoDTO";
import Atendimento from "../models/Atendimento";

import pool from "../db";

async function getAllAtendimentos(): Promise<Atendimento[]> {
  const result = await pool.query('SELECT * FROM atendimento');
  return result.rows;
}

async function createAtendimento(dataRequest: CreateAtendimentoTDO): Promise<Atendimento> {
  const { data, descricao, valor_recebido, servico_id } = dataRequest;

  const result = await pool.query(
    'INSERT INTO atendimento (data, descricao, valor_recebido, servico_id) VALUES ($1, $2, $3, $4) RETURNING *',
    [data, descricao, valor_recebido, servico_id]
  );
  return result.rows[0];
}

async function getAtendimentoById(id: number): Promise<Atendimento | null> {
  const result = await pool.query('SELECT * FROM atendimento WHERE id = $1', [id]);
  return result.rows[0] || null;
}

export { getAllAtendimentos, createAtendimento, getAtendimentoById };