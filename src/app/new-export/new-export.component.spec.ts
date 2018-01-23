import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  NewexoprtComponent } from './new-export.component';

describe('ExpensesComponent', () => {
    let component:  NewexoprtComponent;
    let fixture: ComponentFixture< NewexoprtComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [ NewexoprtComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent( NewexoprtComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
