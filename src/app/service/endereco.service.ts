import { Injectable } from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {IEndereco} from "../domain/endereco.model";

type EntityResponseType = HttpResponse<IEndereco>;
type EntityArrayResponseType = HttpResponse<IEndereco[]>;

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  public resourceUrl = '/endereco';

  constructor() { }
}
