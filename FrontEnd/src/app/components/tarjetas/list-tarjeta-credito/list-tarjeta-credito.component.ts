import { Component, OnInit } from '@angular/core';
import { TarjetaService } from '../../../services/tarjeta.service';

@Component({
  selector: 'app-list-tarjeta-credito',
  templateUrl: './list-tarjeta-credito.component.html',
  styleUrls: ['./list-tarjeta-credito.component.css'],
})
export class ListTarjetaCreditoComponent implements OnInit {
  constructor(public tarjetaService: TarjetaService) {}

  ngOnInit(): void {
    this.tarjetaService.obtenerTarjeta();
  }
}
