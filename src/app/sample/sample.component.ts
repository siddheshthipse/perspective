import { Component, OnInit } from '@angular/core';
import '@finos/perspective';
import '@finos/perspective-viewer';
import { HTMLPerspectiveViewerElement } from '@finos/perspective-viewer';
import perspective, {
  PerspectiveWorker,
  TableData,
  View,
  ViewConfig,
} from '@finos/perspective';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  worker: PerspectiveWorker;

  data1: any = [
    { value: 1048, name: 'Task' },
    { value: 735, name: 'Issues' },
    { value: 580, name: 'Test Cases' },
    { value: 484, name: 'Backlogs' },
    { value: 300, name: 'Errors' },
  ];

  data2: any = [
    {
      id: 1000,
      name: 'James Butt',
      country: 'Algeria',
      company: 'Benton, John B Jr',
      date: '2015-09-13',
      status: 'unqualified',
      verified: true,
      activity: 17,
      representative: 'Ioni Bowcher',
      balance: 70663,
    },
    {
      id: 1001,
      name: 'Josephine Darakjy',
      country: 'Egypt',
      company: 'Chanay, Jeffrey A Esq',
      date: '2019-02-09',
      status: 'proposal',
      verified: true,
      activity: 0,
      representative: 'Amy Elsner',
      balance: 82429,
    },
    {
      id: 1002,
      name: 'Art Venere',
      country: 'Panama',
      company: 'Chemel, James L Cpa',
      date: '2017-05-13',
      status: 'qualified',
      verified: false,
      activity: 63,
      representative: 'Asiya Javayant',
      balance: 28334,
    },
    {
      id: 1003,
      name: 'Lenna Paprocki',
      country: 'Slovenia',
      company: 'Feltz Printing Service',
      date: '2020-09-15',
      status: 'new',
      verified: false,
      activity: 37,
      representative: 'Xuxue Feng',
      balance: 88521,
    },
    {
      id: 1004,
      name: 'Donette Foller',
      country: 'South Africa',
      company: 'Printing Dimensions',
      date: '2016-05-20',
      status: 'proposal',
      verified: true,
      activity: 33,
      representative: 'Asiya Javayant',
      balance: 93905,
    },
    {
      id: 1005,
      name: 'Simona Morasca',
      country: 'Egypt',
      company: 'Chapman, Ross E Esq',
      date: '2018-02-16',
      status: 'qualified',
      verified: false,
      activity: 68,
      representative: 'Ivan Magalhaes',
      balance: 50041,
    },
    {
      id: 1006,
      name: 'Mitsue Tollner',
      country: 'Paraguay',
      company: 'Morlong Associates',
      date: '2018-02-19',
      status: 'renewal',
      verified: true,
      activity: 54,
      representative: 'Ivan Magalhaes',
      balance: 58706,
    },
    {
      id: 1007,
      name: 'Leota Dilliard',
      country: 'Serbia',
      company: 'Commercial Press',
      date: '2019-08-13',
      status: 'renewal',
      verified: true,
      activity: 69,
      representative: 'Onyama Limba',
      balance: 26640,
    },
    {
      id: 1008,
      name: 'Sage Wieser',
      country: 'Egypt',
      company: 'Truhlar And Truhlar Attys',
      date: '2018-11-21',
      status: 'unqualified',
      verified: true,
      activity: 76,
      representative: 'Ivan Magalhaes',
      balance: 65369,
    },
    {
      id: 1009,
      name: 'Kris Marrier',
      country: 'Mexico',
      company: 'King, Christopher A Esq',
      date: '2015-07-07',
      status: 'proposal',
      verified: false,
      activity: 3,
      representative: 'Onyama Limba',
      balance: 63451,
    },
    {
      id: 1010,
      name: 'Minna Amigon',
      country: 'Romania',
      company: 'Dorl, James J Esq',
      date: '2018-11-07',
      status: 'qualified',
      verified: false,
      activity: 38,
      representative: 'Anna Fali',
      balance: 71169,
    },
  ];
  constructor() {
    this.worker = perspective.worker();
  }

  ngOnInit() {
    const viewer: HTMLPerspectiveViewerElement = document.getElementById(
      'perspective-viewer'
    ) as any;
    const table = perspective.worker().table(this.data2);

    viewer.load(table);
  }

  updateTable() {
    const viewer: HTMLPerspectiveViewerElement = document.getElementById(
      'perspective-viewer'
    ) as any;
    const table = perspective.worker().table(this.data1);

    viewer.load(table);
    viewer.toggleConfig();
    viewer.getAllPlugins().then((response)=>{
      console.log('Plugins are');
      console.log(response);
    })
  }

  async pivotButton() {
    const table = await perspective.worker().table(this.data2);
    // const vConfig:ViewConfig

    const view = await table.view();
    view.num_columns().then((response)=>{
      console.log('view');
      console.log(response);
    })
  }

  async sortView() {
    const table = await perspective.worker().table(this.data2);

    table.view({
      sort: [['name', 'asc']],
    }).then((returnData)=>{
      console.log(returnData.to_json().then((response)=>{
        console.log(response);
      }));
    });
    
    // console.log(view3);
  }

  getCurrentTable(){

  }
}
