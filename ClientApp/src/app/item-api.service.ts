import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Item {
  id?: number;
  name: string;
  value: number;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemAPIService {

  public baseUrl: string;

  constructor(
    public http: HttpClient,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
  }

  createItem(newItem): Observable<Item> {
    return this.http.post<Item>(this.baseUrl + 'api/Items', newItem);
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl + 'api/Items');
  }

  deleteItem(itemId): Observable<Item> {
    return this.http.delete<Item>(this.baseUrl + 'api/Items/' + itemId);
  }

}
