import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
//import { Person } from '../mock/person-mock.json';

//import 'rxjs/add/operator/map';

@Component({
  selector: 'app-report-a',
  templateUrl: './report-a.component.html',
  styleUrls: ['./report-a.component.css']
})
export class ReportAComponent implements OnDestroy, OnInit {
  persons: any[] = 
  [{
    "ID": 1,
    "FirstName": "Sima",
    "LastName": "Smuch"
  },
  {
    "ID": 2,
    "FirstName": "Sara",
    "LastName": "Levy"
  },
  {
    "ID": 3,
    "FirstName": "Jaja",
    "LastName": "Abramov"
  }
];
  // dtOptions: DataTables.Settings = {};
  //persons: Person[] = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(){}//private httpClient: HttpClient) { }

  ngOnInit(): void {
   /*   this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    }; 
     this.httpClient.get<Person[]>('data/data.json')
      .subscribe(data => {
        this.persons = (data as any).data;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });  */
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}