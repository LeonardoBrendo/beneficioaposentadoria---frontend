import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Beneficio } from "./beneficio.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BeneficioService {
  baseUrl = "http://localhost:3001/beneficio";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(beneficio: Beneficio): Observable<Beneficio> {
    return this.http.post<Beneficio>(this.baseUrl, beneficio).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Beneficio[]> {
    return this.http.get<Beneficio[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Beneficio> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Beneficio>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
