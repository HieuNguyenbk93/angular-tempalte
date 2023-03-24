import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  lstData$: Observable<any> = new Observable;

  constructor(
    private firestore: Firestore
  ) { }

  addData(d: any) {
    const collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, d).then(() => {
      console.log('success');
    }).catch((err) => {
      console.log(err);
    })
  }

  getData() {
    const collectionInstance = collection(this.firestore, 'users');
    collectionData(collectionInstance).subscribe((res) => {
      console.log(res);
    })
    this.lstData$ = collectionData(collectionInstance);
    console.log(this.lstData$);
  }
}
