import { Beneficio } from '../beneficio.model';
import { BeneficioService } from '../beneficio.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beneficio-create',
  templateUrl: './beneficio-create.component.html',
  styleUrls: ['./beneficio-create.component.css']
})
export class BeneficioCreateComponent implements OnInit {

  beneficio: Beneficio = {
    nome: '',
    CPF: null,
    orgao: '',
    matricula: null
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
