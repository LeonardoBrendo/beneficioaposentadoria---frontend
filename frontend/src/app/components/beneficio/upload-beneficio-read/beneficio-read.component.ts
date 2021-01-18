import { BeneficioService } from '../beneficio.service';
import { Beneficio } from '../beneficio.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beneficio-read',
  templateUrl: './beneficio-read.component.html',
  styleUrls: ['./beneficio-read.component.css']
})
export class BeneficioReadComponent implements OnInit {

  beneficio: Beneficio[]
  displayedColumns = ['id', 'nome', 'CPF', 'orgao', 'matricula', 'categoria', 'action']
  
  constructor(private beneficioService: BeneficioService) { }

  ngOnInit(): void {
    this.beneficioService.read().subscribe(beneficio => {
      this.beneficio = beneficio
    })
  }

}
