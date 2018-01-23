import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AlertService, AuthenticationService, UserService } from '../_services/index';
import {Export, Format} from '../_models/index';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    model: any = {};
    modelExp: any = {};
    loading = false;
    returnUrl: string;
    //list of expenes
    Export: Array<any> = [];
    //order in scs
    order: Array<Format> = [];
    //title in scv
    defaulttitle: Array<string> = [];


    csvmodel: Export[] = [] ;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private userService: UserService) { }

    ngOnInit() {
       this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onLoggedin() {
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    localStorage.setItem('isLoggedin', 'true');
                    this.SetDepance();
                    this.SetDefault();
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    alert('errer');
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    SetDefault() {
        this.order.push(
            {formule: 'date_depence', entet: 'Date depence'},
            {formule: 'Nom', entet: 'Nom de la dépense'},
            {formule: 'Categorie', entet: 'Categorie'},
            {formule: 'value', entet: 'TTC'},
            {formule: 'TVA', entet: 'TVA'},
            {formule: 'moyen_payement', entet: 'Moyen de paiement'},
            {formule: 'Nom_marchand', entet: 'Nom du marchand'},
            {formule: 'pays', entet: 'Adresse du marchand'},
            {formule: 'id', entet: 'Id de la depense'},
            {formule: 'Affaire', entet: 'Affaire'}
           );

           this.modelExp = {
            order: this.order,
            format: 'csv',
            name: 'New Export222'
        };




        this.userService.createcsv(this.modelExp)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    console.log('CSV format registration successful');
                },
                error => {
                    this.alertService.error(error);
                    console.log(error);

             });

        this.csvmodel.push({
            id: 1,
            order: this.order,
            format: 'csv',
            name: 'Default CSV'
        });
        localStorage.setItem('CSVdefault', JSON.stringify(this.csvmodel));
    }

    SetDepance() {
      this.Export.push({
            id: 0 ,
            date_depence: '12/12/2017',
            Nom: 'usa-restaurant-sales-tax-receipt',
            Categorie: 'Restauration',
            value: '192,97',
            TVA: '0',
            moyen_payement: 'Card',
            Nom_marchand: 'Abc Restaurant',
            pays: 'Etats-Unis',
            Affaire: '1',
            date: '10/12/207',
            imagePath: 'assets/images/info3.jpg',
            urlCategorie : 'assets/images/restauration.png',
            ischeck: true
        }, {
            id: 1 ,
            date_depence: '10/12/2017',
            Nom: 'invoice',
            Categorie: 'Avion',
            value: '140',
            TVA: '',
            moyen_payement: 'Card',
            Nom_marchand: 'Abc',
            pays: 'France',
            Affaire: '1',
            date: '25/10/207',
            imagePath: 'assets/images/info1.jpg',
            urlCategorie : 'assets/images/avion.png',
            ischeck: false
        },
        {
            id: 4 ,
            date_depence: '10/12/2017',
            Nom: 'Carburant france',
            Categorie: 'Carburant',
            value: '50',
            TVA: '',
            moyen_payement: 'Card',
            Nom_marchand: 'Abc Restaurant',
            pays: 'France',
            Affaire: '1',
            date: '9/12/207',
            imagePath: 'assets/images/info2.jpg',
            urlCategorie : 'assets/images/carburant.png',

            ischeck: false
        },
        {
            id: 2 ,
            date_depence: '10/12/2017',
            Nom: 'restaurant-Quebec',
            Categorie: 'Restauration',
            value: '20',
            TVA: '',
            moyen_payement: 'Card',
            Nom_marchand: 'Abc Restaurant',
            pays: 'Canada',
            Affaire: '1',
            date: '9/12/207',
            imagePath: 'assets/images/info2.jpg',
            urlCategorie : 'assets/images/restauration.png',
            ischeck: false
        },
        {
            id: 3 ,
            date_depence: '10/12/2017',
            Nom: 'restaurant-Quebec',
            Categorie: 'Restauration',
            value: '20',
            TVA: '',
            moyen_payement: 'Card',
            Nom_marchand: 'Abc Restaurant',
            pays: 'Canada',
            Affaire: '1',
            date: '9/12/207',
            imagePath: 'assets/images/info2.jpg',
            urlCategorie : 'assets/images/restauration.png',

            ischeck: false
        });
        localStorage.setItem('Expenses', JSON.stringify(this.Export));

    }

}
