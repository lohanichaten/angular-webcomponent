import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";



@Component({
    templateUrl:'./custom-web.component.html',
    styleUrls:['./custom-web.component.scss'],
    encapsulation:ViewEncapsulation.Emulated
})
export class CustomWebComponent implements OnInit{
    
    @Input() heading:string;
    
    ngOnInit(): void {
       
    }



}