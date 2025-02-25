import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppComponent implements AfterViewInit {
  @ViewChild('modal', { static: false }) modal!: ElementRef;

  ngAfterViewInit() {}

  openModal() {
    this.modal.nativeElement.open();
  }
}
