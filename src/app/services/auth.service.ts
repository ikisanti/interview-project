import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private changeValue: boolean = false;

  setChangeValue(value: boolean): void {
    this.changeValue = value;
  }
  getAuthToken(): Observable<boolean> {
    return of(this.changeValue);
  }

}