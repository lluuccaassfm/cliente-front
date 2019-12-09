
export interface IEndereco {
  id?: number;
  cep?: string;
  logradouro?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
  complementeo?: string;
}

export class EnderecoModek implements IEndereco{
  constructor(
    id?: number,
    cep?: string,
    logradouro?: string,
    bairro?: string,
    cidade?: string,
    uf?: string,
    complementeo?: string
  ) {}
}
