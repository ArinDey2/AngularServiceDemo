import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Book } from '../../../models/Book';

import { Post } from '../../../models/Post';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: [
    './books.component.css',
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class BooksComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      data => this.books = data
    );
  }

}
