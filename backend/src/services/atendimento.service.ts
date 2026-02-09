import CreateServicoDTO from "../dtos/CreateServicoDTO";
import Atendimento from "../models/Atendimento";

import pool from "../db";

async function getAllAtendimentos(): Promise<Atendimento[]> {
  const result = await pool.query('SELECT * FROM atendimento');
  return result.rows;
}

export { getAllAtendimentos };