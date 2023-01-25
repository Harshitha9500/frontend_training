import { Component,Input,OnInit } from '@angular/core';
import book from './details.json';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import {Observable} from 'rxjs';
import { collegeSelector } from '../state/search.selectors';
import { AppStateInterface } from '../types/appState.interface';

interface Data{
      tags: string[],
      likes: string[],
      createdAt: string,
      _id: string,
      title: string,
      number: string,
      college: string,
      year: string,
      branch: string,
      selectedFile: string,
      name: string,
      email: string,
      creator: string,
      __v: number
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bookData:Data[]=book.data;
  m: any;
  @Input() searchCol='';
  @Input() searchBook='';
  coll$:Observable<string>
  constructor(private store:Store<AppStateInterface>){
    this.coll$ = this.store.pipe(select(collegeSelector));
    console.log(this.coll$);
  }
  ngOnInit(){
    this.m=moment;
  }

}
