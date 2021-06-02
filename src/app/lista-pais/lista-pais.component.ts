import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-lista-pais',
  templateUrl: './lista-pais.component.html',
  styleUrls: ['./lista-pais.component.css']
})
export class ListaPaisComponent implements OnInit {

  paises:Array<any> | undefined;

  constructor(private paisService: PaisesService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.paisService.listar().subscribe(dados => this.paises = dados)
  }

}
