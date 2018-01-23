import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../shared';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { StatModule } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        StatModule,
        PageHeaderModule,
        Ng2Charts
    ],
    declarations: [
        DashboardComponent ]
})
export class DashboardModule {}
