import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Book } from '../../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  booksUrl = 'http://localhost:8080/RestTest/rest/books';

  constructor(private http: HttpClient) {
   }

   getBooks(): Observable<Book[]> {
     return this.http.get<Book[]>(this.booksUrl);
   }
}
