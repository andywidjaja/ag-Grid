import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;

  title = 'ag-Grid Demo';

  columnDefs = [
    {headerName: 'Cusip', field: 'cusip', checkboxSelection: true, width: 140 },
    {headerName: 'Asset Type', field: 'assetType' },
    {headerName: 'Issuer Industry', field: 'issueIndustry' },
    {headerName: 'Mtg Amort Type Lvl', field: 'mortgageAmortizationTypeLevel' },
    {headerName: 'Mtg Type', field: 'mortgageType' },
    {headerName: 'Mtg Prepay Type', field: 'mortgagePrepayType' },
    {headerName: 'Sec Type', field: 'securityType' },
    {headerName: 'Sec Type2', field: 'securityType2' },
    {headerName: 'Cpn Type', field: 'couponType' },
    {headerName: 'Mkt Sector Desc', field: 'marketSectorDescription' },
    {headerName: 'Mtg Collat Type', field: 'mortgageCollateralType' },
    {headerName: 'Tax Code', field: 'taxCode', width: 90 },
    {headerName: 'Bank Qualified', field: 'bankQualified' },
    {headerName: 'Dated Dt', field: 'datedDate', width: 120 },
    {headerName: 'Capital Purpose', field: 'capitalPurpose' }
  ];

  defaultColDef = {
    // Set every column width
    width: 100
  };

  rowData: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
      //this.rowData = this.http.get('https://jsonplaceholder.typicode.com/photos');
      this.rowData = this.http.get('http://localhost:5000/api/bonds');
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.cusip + ' ' + node.assetType).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}