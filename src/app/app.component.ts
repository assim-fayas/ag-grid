import { Component, OnInit, inject } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'ag-grid';

http:HttpClient=inject(HttpClient)

tableData:any[]=[]


ngOnInit(): void {
  this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe((data)=>{
    console.log(data);
    
this.tableData=data
  })
}

colDefs: ColDef[] = [
  { field: "id",flex:0, },
  { field: "name",flex:2  },
  { field: "username",flex:2 },
  { field: "email" ,flex:2},
  { field: "website" ,flex:2},
 
];


}
