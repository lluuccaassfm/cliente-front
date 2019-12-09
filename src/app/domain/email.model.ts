import {ICliente} from "./cliente.model";

export interface IEmail {
  id?: number;
  descricao?: string;
  cliente?: ICliente;
}

export class EmailModel implements IEmail{
  constructor(
    id?: number,
    descricao?: string,
    cliente?: ICliente
  ) {}
}
