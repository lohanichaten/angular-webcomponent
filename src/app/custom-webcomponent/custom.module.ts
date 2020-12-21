import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { CustomWebComponent } from "./custom-web.component";






@NgModule({
        imports:[],
        providers:[],
        declarations:[CustomWebComponent],
        exports:[CustomWebComponent],
        schemas:[CUSTOM_ELEMENTS_SCHEMA],
        entryComponents:[CustomWebComponent]
})
export class CustomModule{

    constructor(private injector:Injector){
        const elem=createCustomElement(CustomWebComponent,{injector:this.injector});

        customElements.define('custom-webcomponent',elem);
    }

}