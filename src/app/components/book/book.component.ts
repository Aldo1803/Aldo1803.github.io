import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  public id: any;
  public book: any;
  public pages: any;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((response) => {

      this.bookService.getBook(response.id).subscribe((data: any) => {
        this.book = data.record;

      });
    });
  }

  onSubmit(form: NgForm){
    console.log(this.pages)
    this.bookService.updateBook(this.book._id, this.pages).subscribe((data: any) => {

      this.router.navigate(['/home']);
  });

  }

  deleteBook(){
  this.bookService.delete(this.book._id).subscribe((response: any) => {

    this.router.navigate(['/home']);
  })
  }
  ngOnInit(): void {}
}
