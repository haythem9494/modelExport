import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  NewexoprtComponent } from './new-export.component';

const routes: Routes = [
    {
        path: '',
        component:  NewexoprtComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlankPageRoutingModule {}
