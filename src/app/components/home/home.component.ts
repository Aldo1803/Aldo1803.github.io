import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public records;
  constructor(private bookService: BookService) {
    this.bookService.getRecords().subscribe((response: any)=>{
    this.records = response;

    });

  }



  ngOnInit(): void {
  }

}
