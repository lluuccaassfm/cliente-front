import { Injectable } from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {ITelefone} from "../domain/telefone.model";

type EntityResponseType = HttpResponse<ITelefone>;
type EntityArrayResponseType = HttpResponse<ITelefone[]>;

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {

  public resourceUrl = '/telefone';

  constructor() { }
}
