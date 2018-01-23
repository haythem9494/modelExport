import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    message: any;

    constructor(private alertService: AlertService) { }

    OnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}