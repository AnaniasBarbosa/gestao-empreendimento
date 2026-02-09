import Servico from "../models/Servico";
import CreateServicoDTO from "../dtos/CreateServicoDTO";
import pool from "../db";

async function getAllServicos(): Promise<Servico[]> {
  const result = await pool.query('SELECT * FROM servico');
  return result.rows;
}

async function createServico(servico: CreateServicoDTO): Promise<Servico> {
  const { titulo, descricao, valor_padrao } = servico;
  
  const result = await pool.query(
    'INSERT INTO servico (titulo, descricao, valor_padrao) VALUES ($1, $2, $3) RETURNING *',
    [titulo, descricao, valor_padrao]
  );
  return result.rows[0];
}

async function getServicoById(id: number): Promise<Servico | null> {
  const result = await pool.query('SELECT * FROM servico WHERE id = $1', [id]);
  return result.rows[0] || null;
}

async function updateServico(id: number, servico: CreateServicoDTO): Promise<Servico | null> {
  const { titulo, descricao, valor_padrao } = servico;
  
  const result = await pool.query(
    'UPDATE servico SET titulo = $1, descricao = $2, valor_padrao = $3 WHERE id = $4 RETURNING *',
    [titulo, descricao, valor_padrao, id]
  );
  return result.rows[0] || null;
}

export { getAllServicos, createServico, getServicoById, updateServico };