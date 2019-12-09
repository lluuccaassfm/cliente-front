export interface ICliente {
  id?: number;
  nome?: string;
  cpg?: string;
  senha?: string;
  perfil?: IPerfil;
  endereco?: IEndereco;
}

export class ClienteModel implements ICliente{
  constructor(
    id?: number,
    nome?: string,
    cpg?: string,
    senha?: string,
    perfil?: IPerfil,
    endereco?: IEndereco,
  ) {}
}
