import { Beneficio } from '../beneficio.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BeneficioRead2DataSource } from './beneficio-read2-datasource';

@Component({
  selector: 'app-beneficio-read2',
  templateUrl: './beneficio-read2.component.html',
  styleUrls: ['./beneficio-read2.component.css']
})
export class BeneficioRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Beneficio>;
  dataSource: BeneficioRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nome', 'CPF', "orgao", 'matricula'];

  ngOnInit() {
    this.dataSource = new BeneficioRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
