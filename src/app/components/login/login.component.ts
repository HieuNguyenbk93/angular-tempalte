import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lstData$: Observable<any> = new Observable;

  constructor(
    private firebase: FirebaseService
  ) { }

  ngOnInit(): void {
    this.firebase.getData();
    this.lstData$ = this.firebase.lstData$;
  }

  addData(f: any) {
    this.firebase.addData(f.value);
  }

}
