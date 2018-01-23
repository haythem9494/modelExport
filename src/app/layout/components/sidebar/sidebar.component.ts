import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {
    currentUser: any;
    isActive: boolean = false;
    showMenu: string = '';
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}

