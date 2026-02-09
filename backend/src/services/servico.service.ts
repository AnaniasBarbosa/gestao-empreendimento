import Servico from "../models/Servico";
import pool from "../db";

async function getAllServicos(): Promise<Servico[]> {
  const result = await pool.query('SELECT * FROM servico');
  return result.rows;
}

export { getAllServicos };