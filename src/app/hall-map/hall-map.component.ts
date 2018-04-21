import { Component, OnInit, EventEmitter, Output, Renderer, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { PopupDetailsComponent } from '../popup-details/popup-details.component';

@Component({
  selector: 'app-hall-map',
  templateUrl: './hall-map.component.html',
  styleUrls: ['./hall-map.component.css']
})
export class HallMapComponent implements OnInit {

  welcomeTxt = `Welcome to party!`;
  private std: any;
  @ViewChild('standDetails') private stdElement: ElementRef;
  isOpen = false;

  constructor(private domSanitizer: DomSanitizer, public dialog: MatDialog, private renderer: Renderer) { }


  ngOnInit() {
    this.std = this.stdElement.nativeElement;
  }

  openPopup(details): void {
    console.log('popup');
    // const dialogRef = this.dialog.open(PopupDetailsComponent, {
    //   width: '250px',
    //   data: { details: details.details, image: details.image }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    //   const reserve = result;
    // });
  }

  mouseEnter($event) {
    // console.log($event);
    this.renderer.setElementStyle(this.std, 'visibility', `visible`);
    this.renderer.setElementStyle(this.std, 'color', `red`);

    const dimensions = this.stdElement.nativeElement.getBoundingClientRect();
    this.renderer.setElementStyle(this.std, 'top', `${$event.clientY / 2.64}px`);
    this.renderer.setElementStyle(this.std, 'left', `${$event.clientX / 2.64}px`);
  }

  mouseLeave($event) {
    this.isOpen = false;
    this.renderer.setElementStyle(this.std, 'visibility', `hidden`);
  }

}
