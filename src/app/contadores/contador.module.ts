import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

import { ContadorComponent } from './contador/contador-component';


@NgModule({
    declarations:[
        // Components
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ContadorModule{

}