import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {
  urlAPI = 'https://viacep.com.br/ws/';

  constructor(private service: HttpClient) { }

  getConsultaCep(cep: string) {
    return this.service.get(this.urlAPI + cep + '/json/');
  }
}
