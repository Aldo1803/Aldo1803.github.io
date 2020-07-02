import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  public url: string;
  public key: string;
  constructor(private http: HttpClient) {
    this.url = 'https://reading-tracker-app.herokuapp.com/updates/';
    this.key = 'AIzaSyDbAuh4ft4AAssbLZruv1xTfAq6lZe08uo';
  }

  getRecords(){
    return this.http.get(this.url + 'get-records');
  }

  newBook(book){
  return this.http.post(this.url + 'new-record', book);
  }

  googleBooks(isbn){
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${this.key}`);
  }

  getBook(id){
    return this.http.get(this.url + `book/${id}`);
  }
  updateBook(id: any, pages: any){
    return this.http.put(this.url + `update/${id}`, {pages});
  }
  delete(id: any){
    return this.http.delete(this.url + `delete/${id}`);
  }
}
