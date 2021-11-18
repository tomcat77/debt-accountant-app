import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterpartyRecord } from './debt.model';

@Injectable({
  providedIn: 'root'
})
export class CounterpartiesService {

  constructor(private http: HttpClient) { }

  public getAllCounterpartyRecords(): Observable<CounterpartyRecord[]> {
    return this.http.get<CounterpartyRecord[]>('./assets/counterparties.json', { responseType: 'json' });
  }
}
