import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-webcomponent';
  @ViewChild('iCounter') iCounter: ElementRef;  

  ngOnInit(): void {
    
   
  }

  addElement(){
    const elem=document.createElement('custom-webcomponent');
    elem['heading']='Custom element';

  //  const rootElem=document.getElementById('custom-elem');
    //rootElem.appendChild(elem);


    const rootElem=document.body.appendChild(elem);
  }

  increment(){
    this.iCounter.nativeElement.increment();
  }

  decrement(){
    this.iCounter.nativeElement.decrement();
  }



}
