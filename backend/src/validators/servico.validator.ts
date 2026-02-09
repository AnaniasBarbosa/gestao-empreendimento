function validateCreateServicoDTO(data: any): { valid: boolean; errors?: string[] } {
  const errors: string[] = [];
  
  if (!data.titulo || typeof data.titulo !== 'string') {
    errors.push('O campo "titulo" é obrigatório e deve ser uma string.');
  }
  
  if (data.descricao && typeof data.descricao !== 'string') {
    errors.push('O campo "descricao" deve ser uma string, se fornecido.');
  }
  
  if (data.valor_padrao === undefined || typeof data.valor_padrao !== 'number' || data.valor_padrao < 0) {
    errors.push('O campo "valor_padrao" é obrigatório, deve ser um número e não pode ser negativo.');
  }
  
  return {
    valid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined
  };
}

export { validateCreateServicoDTO };