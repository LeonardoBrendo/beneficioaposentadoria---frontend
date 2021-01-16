import { Beneficio } from '../beneficio.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

const EXAMPLE_DATA: Beneficio[] = [
  // {id: 1, nome: 'Hydrogen', CPF: 9.99},
  // {id: 2, nome: 'Helium', CPF: 9.99},
  // {id: 3, nome: 'Lithium', CPF: 9.99},
  // {id: 4, nome: 'Beryllium', CPF: 9.99},
  // {id: 5, nome: 'Boron', CPF: 9.99},
  // {id: 6, nome: 'Carbon', CPF: 9.99},
  // {id: 7, nome: 'Nitrogen', CPF: 9.99},
  // {id: 8, nome: 'Oxygen', CPF: 9.99},
  // {id: 9, nome: 'Fluorine', CPF: 9.99},
  // {id: 10, nome: 'Neon', CPF: 9.99},
  // {id: 11, nome: 'Sodium', CPF: 9.99},
  // {id: 12, nome: 'Magnesium', CPF: 9.99},
  // {id: 13, nome: 'Aluminum', CPF: 9.99},
  // {id: 14, nome: 'Silicon', CPF: 9.99},
  // {id: 15, nome: 'Phosphorus', CPF: 9.99},
  // {id: 16, nome: 'Sulfur', CPF: 9.99},
  // {id: 17, nome: 'Chlorine', CPF: 9.99},
  // {id: 18, nome: 'Argon', CPF: 9.99},
  // {id: 19, nome: 'Potassium', CPF: 9.99},
  // {id: 20, nome: 'Calcium', CPF: 9.99},
];

/**
 * Data source for the BeneficioRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class BeneficioRead2DataSource extends DataSource<Beneficio> {
  data: Beneficio[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Beneficio[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Beneficio[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Beneficio[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nome': return compare(a.nome, b.nome, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/nome columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
