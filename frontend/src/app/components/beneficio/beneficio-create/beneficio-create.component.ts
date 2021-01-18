import { Beneficio } from '../beneficio.model';
import { BeneficioService } from '../beneficio.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

interface Categoria {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-beneficio-create',
  templateUrl: './beneficio-create.component.html',
  styleUrls: ['./beneficio-create.component.css']
})
export class BeneficioCreateComponent implements OnInit {

  selectedValue: string;

  categorias: Categoria[] = [
    {value: "Identificação-1", viewValue:"Identificação"},
    {value: "Vida Funcional-2", viewValue:"Vida Funcional"},
    {value: "Contagem de tempo-3", viewValue:"Contagem de tempo"},
    {value: "Remuneração/Proventos-4", viewValue:"Remuneração/Proventos"},
  ];
  
  beneficio: Beneficio = {
    nome: '',
    CPF: null,
    orgao: '',
    matricula: null,
    categoria: ''
  }

  constructor(private beneficioService: BeneficioService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createBeneficio(): void {
    this.beneficioService.create(this.beneficio).subscribe(() => {
      this.beneficioService.showMessage('Beneficiário criado!')
      this.router.navigate(['/beneficio'])
    })

  }

  cancel(): void {
    this.router.navigate(['/beneficio'])
  }
}
