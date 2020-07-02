import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/classes/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
})
export class NewBookComponent implements OnInit {
  public isbn: number;
  public book = new Book('', 0, '', '');
  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.bookService.googleBooks(this.isbn).subscribe((response: any) => {

      this.book.title = response.items[0].volumeInfo.title;

      this.book.page_count = response.items[0].volumeInfo.pageCount;
      if (response.items[0].volumeInfo.imageLinks) {
        this.book.image_url = response.items[0].volumeInfo.imageLinks.thumbnail;
      } else {
        this.book.image_url = null;
      }
      if (response.items[0].volumeInfo.description) {
        let sinopsis = response.items[0].volumeInfo.description;
        let sinopsis_split = sinopsis.split('.');
        this.book.sinopsis = sinopsis_split[0];
      } else {
        this.book.sinopsis = 'This book has no description';
      }

      this.bookService.newBook(this.book).subscribe((data) => {

        this.router.navigate(['/home']);
      });
    });
  }
}
