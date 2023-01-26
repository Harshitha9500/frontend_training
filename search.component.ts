import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import {NgForm} from '@angular/forms'
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { search } from '../state/search.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // college:Observable<string>;
  // book:Observable<string>;

  college:any;
  book:any;
  valCollege:string="";
  valBook:string="";

//  constructor(private store:Store<{college:string; book:string}>){
//   this.college=store.pipe(select('college'));
//   this.book=store.pipe(select('book'));
//  }
//  search(college,book){
//   this.store.dispatch(search({payload:{colName:this.college, bookName:this.book}}))
//  }
  constructor(private store:Store){
    
  }
 ngOnInit():void{

 }
 
    @Output()
    public collegeName = new EventEmitter<MouseEvent>
    public searchByCollege(college:MouseEvent){
    this.collegeName.emit(college)
    // this.store.dispatch(search())
  }
    @Output()
    public bookName = new EventEmitter<MouseEvent>
    public searchByBook(book:MouseEvent){
    this.bookName.emit(book)
    // this.store.dispatch(search())
  }

  searchBooks(coll:string,book:string){
   this.store.dispatch(search({coll:coll,book:book}));
  }

  validation(college,book){
    if(!college && !book){
      this.valCollege="Please enter college name";
      this.valBook="Please enter book name"
    }
  }

  inputVal(){
      this.valCollege="";
      this.valBook="";
  }

}
