import { Injectable } from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {IPerfil} from "../domain/perfil.model";

type EntityResponseType = HttpResponse<IPerfil>;
type EntityArrayResponseType = HttpResponse<IPerfil[]>;

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  public resourceUrl = '/perfil';

  constructor() { }
}
