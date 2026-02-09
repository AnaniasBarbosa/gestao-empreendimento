interface AtendimentoDTO {
  data: Date;
  descricao?: string;
  valor_recebido: number;
  servico_id?: number;
}

export default AtendimentoDTO;