import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private apiUrl = 'http://localhost:8080/transferencias';

  constructor(private http: HttpClient) {}

  agendarTransferencia(transferencia: Transferencia): Observable<Transferencia> {
    return this.http.post<Transferencia>(this.apiUrl, transferencia);
  }

  listarAgendamentos(): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(this.apiUrl);
  }
}
