import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TarjetaCredito } from '../models/tarjetaCredito';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TarjetaService {
  myAppUrl = 'https://localhost:44332/';
  myApiUrl = 'api/TarjetaCredito/';
  list: TarjetaCredito[];

  constructor(private http: HttpClient) {}

  guardarTarjeta(tarjeta: TarjetaCredito): Observable<TarjetaCredito> {
    return this.http.post<TarjetaCredito>(
      this.myAppUrl + this.myApiUrl,
      tarjeta
    );
  }

  obtenerTarjeta() {
    this.http
      .get(this.myAppUrl + this.myApiUrl)
      .toPromise()
      .then((data) => {
        this.list = data as TarjetaCredito[];
      });
  }
}
