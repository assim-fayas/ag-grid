import { Component, OnInit, inject } from '@angular/core';
import{HttpClient}from '@angular/common/http';

import { ColDef } from 'ag-grid-community';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
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
  { field: "id",flex:1,minWidth: 70, maxWidth: 70, cellStyle: { textAlign: 'center',fontWeight:'bold' }, checkboxSelection: true},
  { field: "name",flex:1,filter:true,minWidth: 200, maxWidth: 500,cellStyle: { textAlign: 'center' },editable: true , cellEditorPopup: true,
  cellEditor: 'agSelectCellEditor', cellEditorParams: {values: ['Tesla', 'Ford', 'Toyota'],},},
  { field: "username",flex:1,filter:true ,minWidth: 200, maxWidth: 500,cellStyle: { textAlign: 'center' }, editable: true   },
  { field: "email" ,flex:1,filter:true,minWidth: 250, maxWidth: 550,cellStyle: { textAlign: 'center' }, editable: true  },
  { field: "website" ,flex:1,filter:true,minWidth: 200, maxWidth: 500,cellStyle: { textAlign: 'center' }, editable: true  }
];

public defaultColDef: ColDef = {
  editable: true,
  flex: 1,
  minWidth: 100,
};
}
