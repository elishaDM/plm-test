import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//import { Person } from '../mock/person-mock.json';

//import 'rxjs/add/operator/map';

interface IPerson{
  "ID": number;
    "FirstName": string;
    "LastName": string;
}
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

  personsCollection!: AngularFirestoreCollection<IPerson>;
  personsFB!: Observable<IPerson[]>;
  // dtOptions: DataTables.Settings = {};
  //persons: Person[] = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private afs: AngularFirestore){}//private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.personsCollection = this.afs.collection('persons')
    this.personsFB = this.personsCollection.valueChanges();
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