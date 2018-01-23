import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '../shared';
import { BlankPageRoutingModule } from './new-export-routing.module';
import {  NewexoprtComponent } from './new-export.component';
import { DndModule } from 'ng2-dnd';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule ,
              FormsModule,
              BlankPageRoutingModule,
              TranslateModule,
              NgbModule.forRoot(),
              DndModule.forRoot(),
              PageHeaderModule],
    declarations: [  NewexoprtComponent]
})
export class NewExportModule {}

