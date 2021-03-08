import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CatalogueItem } from '../models/catalogue-item';
import { ProvidersService } from '../services/orders.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  providerId: number;
}

@Component({
  selector: 'app-provider-catalogue',
  templateUrl: './provider-catalogue.component.html',
  styleUrls: ['./provider-catalogue.component.scss']
})

export class ProviderCatalogueComponent implements OnInit, AfterViewInit {
  description: string
  catalogueItems: Array<CatalogueItem>
  datasource = new MatTableDataSource<CatalogueItem>();
  displayedColumns: string[] = ['id', 'name', 'price'];

  constructor(private providersSvc: ProvidersService, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngAfterViewInit(): void {
    this.providersSvc.getProvider(this.data.providerId).subscribe((data)=>{
      this.description = data.catalogue.description;
      this.catalogueItems = data.catalogue.items;
      this.datasource = new MatTableDataSource<CatalogueItem>(this.catalogueItems);
    })
    console.log(this.description)
    console.log(this.catalogueItems)

  }

  ngOnInit(): void {
  }

}
