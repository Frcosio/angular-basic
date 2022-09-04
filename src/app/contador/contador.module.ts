import { NgModule } from '@angular/core';
import { ContadorComponente } from './contador/contador.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
      ContadorComponente,
    ],
    exports: [
      ContadorComponente,
    ],
    imports: [
      CommonModule,
    ],
})

export class ContadorModule{

}
