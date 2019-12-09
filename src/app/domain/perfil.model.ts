
export interface IPerfil {
  id?: number;
  descricao?: string;
}

export class PerfilModel implements IPerfil{
  constructor(
    id?: number,
    descricao?: string,
  ) {}
}
