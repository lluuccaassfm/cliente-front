import {ICliente} from "./cliente.model";

export interface ITelefone {
  id?: number;
  numero?: string;
  cliente?: ICliente;
}

export class TelefoneModel implements ITelefone{
  constructor(
    id?: number,
    numero?: string,
    cliente?: ICliente
  ) {}
}
