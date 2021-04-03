import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends { id: number }> {

  dataSource: string = 'http://localhost:3000/';
  entityName: string = '';
  list$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  item$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  error$: Subject<string> = new Subject<string>();

  constructor(
    public http: HttpClient,
    @Inject('entityName') entityName: string
  ) {
    this.entityName = entityName;
    this.dataSource += `/${this.entityName}`;
  }
  getAll(): void {
    this.http.get<T[]>(this.dataSource).subscribe(
      data => this.list$.next(data),
      err => this.error$.next(err)
    )
  }

  get(id: number): void {
    this.http.get<T>(`${this.dataSource}/${id}`).subscribe(
      data => this.item$.next(data),
      err => this.error$.next(err)
    )
  }

  create(item: T): void {
    this.http.post<T>(`${this.dataSource}`, item).subscribe(
      data => this.item$.next(data),
      err => this.error$.next(err)
    )
  }

  update(item: T): void {
    this.http.patch<T>(`${this.dataSource}/${item.id}`, item).subscribe(
      data => this.item$.next(data),
      err => this.error$.next(err)
    )
  }

  delete(id: number): void {
    this.http.delete<T>(`${this.dataSource}/${id}`).subscribe(
      () => { },
      err => this.error$.next(err)
    )
  }

}
