import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-welecome',
  templateUrl: './welecome.component.html',
  styleUrls: ['./welecome.component.scss']
})
export class WelecomeComponent implements OnInit {

  @ViewChild('name') nameKey! : ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
    console.log("QuiZ started by : "+this.nameKey.nativeElement.value);
  }

}
