import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ProvidersService } from './services/orders.service';
import { ProviderCatalogueComponent } from './provider-catalogue/provider-catalogue.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table'

const materialImports = [MatButtonModule, MatCardModule, MatDialogModule, MatTableModule];

@NgModule({
  declarations: [ProviderListComponent, ProviderCatalogueComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    HttpClientModule,
    ...materialImports,
  ],
  providers: [ProvidersService],
  entryComponents: [ProviderCatalogueComponent]
})
export class OrderModule { }
