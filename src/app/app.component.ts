import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'we-connect';
  private mediaSub !: Subscription;


  constructor(
    private cdRef: ChangeDetectorRef,
    private meadiaObserver: MediaObserver
  ) {

  }

  ngOnInit(): void {

    this.mediaSub = this.meadiaObserver.media$.subscribe(
      (change: MediaChange) => {
        console.log(change.mqAlias);
        // console.log(change);
      }
    )

  }
  ngAfterViewInit(): void {

  }
  ngOnDestroy(): void {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }





}
