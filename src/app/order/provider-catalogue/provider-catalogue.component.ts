import { Component, OnInit } from '@angular/core';;

export interface DialogData {
  catalogueitem: 'item';
}

@Component({
  selector: 'app-provider-catalogue',
  templateUrl: './provider-catalogue.component.html',
  styleUrls: ['./provider-catalogue.component.scss']
})
export class ProviderCatalogueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
