import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApiService {

  private subject$ = new Subject<string>();

  constructor() { }

  public stream(): Observable<string> {
    return this.subject$
      .asObservable()
      .pipe(delay(1000));
  }

  public push(data: string): void {
    this.subject$.next(data);
  }
}
