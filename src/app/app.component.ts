import { Component, AfterViewInit, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit, OnInit {

  public data$: Observable<string>;

  constructor(private api: ApiService) {}

  public ngOnInit(): void {
    this.data$ = this.api.stream();2
  }

  public ngAfterViewInit(): void {
    (<HTMLElement> document.querySelector('[contenteditable]')).focus();
  }

  public onModelChange(data: string): void {
    this.api.push(data);
  }
}
