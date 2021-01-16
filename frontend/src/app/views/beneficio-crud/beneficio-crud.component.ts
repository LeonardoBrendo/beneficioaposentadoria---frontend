import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-beneficio-crud',
  templateUrl: './beneficio-crud.component.html',
  styleUrls: ['./beneficio-crud.component.css']
})
export class BeneficioCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Benefícios de aposentadoria',
      icon: 'storefront',
      routeUrl: '/beneficio'
    }
  }

  ngOnInit(): void {
  }

  navigateToBeneficioCreate(): void {
    this.router.navigate(['/beneficio/create'])
  }

}
