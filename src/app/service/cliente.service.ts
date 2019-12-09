import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {ICliente} from "../domain/cliente.model";

type EntityResponseType = HttpResponse<ICliente>;
type EntityArrayResponseType = HttpResponse<ICliente[]>;

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public resourceUrl = '/cliente';

  constructor(private http: HttpClient) {
  }


}
