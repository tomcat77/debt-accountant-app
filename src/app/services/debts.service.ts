import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DebtRecord } from './debt.model';

@Injectable({
  providedIn: 'root'
})
export class DebtsService {

  constructor(private http: HttpClient) { }

  public getAllDebtRecords(): Observable<DebtRecord[]> {
    return this.http.get<DebtRecord[]>('./assets/debts.json', { responseType: 'json' });
  }

}
