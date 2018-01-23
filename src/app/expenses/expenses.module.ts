import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '../shared';
import { BlankPageRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule ,
              BlankPageRoutingModule,
              TranslateModule,FormsModule,
              NgbModule.forRoot(),
              PageHeaderModule],    declarations: [ ExpensesComponent]
})
export class ExpensesModule {}
