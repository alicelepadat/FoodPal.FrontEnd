import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ProvidersService } from './services/orders.service';
import { ProviderCatalogueComponent } from './provider-catalogue/provider-catalogue.component';

const materialImports = [MatButtonModule, MatCardModule];

@NgModule({
  declarations: [ProviderListComponent, ProviderCatalogueComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    HttpClientModule,
    ...materialImports,
  ],
  providers: [ProvidersService]
})
export class OrderModule { }
