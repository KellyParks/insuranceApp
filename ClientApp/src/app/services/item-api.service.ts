import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/item-interface';

/**
 * Handles the API calls for the Items endpoint.
*/
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

  createItem(newItem: Item): Observable<Item> {
    return this.http.post<Item>(this.baseUrl + 'api/Items', newItem);
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl + 'api/Items');
  }

  deleteItem(itemId: number): Observable<Item> {
    return this.http.delete<Item>(this.baseUrl + 'api/Items/' + itemId);
  }

}
