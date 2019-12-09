import { Injectable } from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {IEmail} from "../domain/email.model";

type EntityResponseType = HttpResponse<IEmail>;
type EntityArrayResponseType = HttpResponse<IEmail[]>;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  public resourceUrl = '/email';

  constructor() { }
}
