import { Component, OnInit, VERSION } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver/FileSaver';
import { Export, Format, Expenses    } from '../_models/index';
import { UserService } from '../_services/index';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { routerTransition } from '../router.animations';
@Component({
    selector: 'app-expenses',
    templateUrl: './expenses.component.html',
    styleUrls: ['./expenses.component.scss'],
    animations: [routerTransition()]
})
export class ExpensesComponent implements OnInit, OnChanges {
    Export: Array<any> = [];
    defaultcsv: Export[]= [];
    Order: Array<Format>;
    fiche: String;
    listeoutput= [];
    _listFilter: string;
    imageWidth: number = 20;
    imageMargin: number = 2;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredExpenses = this.listFilter ? this.performFilter(this.listFilter) : this.Export;
    }
    filteredExpenses: Expenses[];
    constructor( private userService: UserService) {
     // list of expenses
      this.Export = JSON.parse(localStorage.getItem('Expenses')) || [];
     // default format export
      this.defaultcsv = JSON.parse(localStorage.getItem('CSVdefault')) || [];
     // list export
     this.listeoutput = JSON.parse(localStorage.getItem('list')) || [];
     this.filteredExpenses = this.Export
    }

loadAllUsers() {
}

SaveDemo() {
        this.Order = this.defaultcsv[0].order;
        this.GetEntet();
        this.GetData();
        const ff = new Blob([this.fiche], { type: 'text/csv;charset=utf-8' });
        saveAs(ff, 'Defaultcsv.csv');
    }
        

SaveDemoPer(i: number)
    {   this.Order = this.listeoutput[i].order;
        this.GetEntet();
        this.GetData();
        const ff = new Blob([this.fiche], { type: 'text/csv;charset=utf-8' });
        saveAs(ff, 'exportpersonalise.csv');

    }

//return entet 
GetEntet() {
   this.fiche = '';
   for (let x of this.Order)
        {
        this.fiche += x.entet + ';';
        }
    this.fiche += '\n';

}
performFilter(filterBy: string): Export[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.Export.filter((x: Expenses) =>
    x.Nom.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

ngOnInit() { this.loadAllUsers(); }

ngOnChanges() {  }

//return data
private GetData() {

    for (let Entry of this.Export) {
        let Rslt = '';
        for (let s of this.Order )
        {
            let  x = s.formule;
            switch (x) {
                case x = 'date_depence':
                    Rslt += Entry.date_depence + ';';
                    break;
                case x = 'Nom':
                    Rslt += Entry.Nom + ';' ;
                    break;
                case x = 'Categorie':
                    Rslt += Entry.Categorie + ';' ;
                    break;
                case x = 'value':
                    Rslt += Entry.value + ';' ;
                    break;
                    case x = 'TVA':
                    Rslt += Entry.TVA + ';';
                    break;
                case x = 'moyen_payement':
                    Rslt += Entry.moyen_payement + ';' ;
                    break;
                case x = 'Nom_marchand':
                    Rslt += Entry.Nom_marchand + ';' ;
                    break;
                case x = 'pays':
                    Rslt += Entry.pays + ';' ;
                    break;
                    case x = 'id':
                    Rslt += Entry.id + ';';
                    break;
                case x = 'Affaire':
                    Rslt += Entry.Affaire + ';' ;
                    break;
                default:
                    break;
            }

        }
        this.fiche  += Rslt + '\n' ;

    }
 }





 

}
