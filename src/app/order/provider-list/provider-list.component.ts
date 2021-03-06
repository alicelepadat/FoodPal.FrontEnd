import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Provider } from '../models/provider';
import { ProvidersService } from '../services/orders.service';
import {MatDialog} from '@angular/material/dialog';
import { ProviderCatalogueComponent } from '../provider-catalogue/provider-catalogue.component';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss']
})

export class ProviderListComponent implements OnInit, AfterViewInit {
  providers: Array<Provider>;

  constructor(private providersSvc: ProvidersService, public dialog: MatDialog) { }

  openCatalogue(providerId: number){
    this.dialog.open(ProviderCatalogueComponent, {
      data: {
        providerId: providerId
      }
    });
  }

  ngAfterViewInit(): void {
    this.providersSvc.getAllProviders().subscribe((data)=>{
      this.providers = data;
    })
  }

  ngOnInit(): void {
  }
}
